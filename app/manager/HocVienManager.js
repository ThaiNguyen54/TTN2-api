// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HocVien from "../models/HocVien.js";
import hocVien from "../models/HocVien.js";

export function AddHocVien (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien.create(data).then(hocvien => {
            "use strict";
            return callback(null, null, 200, null, hocvien);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_fail', 400, error, null);
    }
}

export function GetAll (callback) {
    try {
        HocVien.findAndCountAll({
            attributes: {
                exclude: ['TenDayDu', 'createdAt', 'createdBy', 'updatedAt', 'updatedBy']
            }
        }).then((data) => {
            let HocVien = data.rows;
            let output = {
                data: HocVien
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_hocvien_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'get_all_hocvien_fail', 400, error, null);
    }
}