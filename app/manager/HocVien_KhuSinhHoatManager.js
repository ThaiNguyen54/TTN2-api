// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HocVien_KhuSinhHoat from "../models/HocVien_KhuSinhHoat.js";

export function AddHocVien_KhuSinhHoat (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien_KhuSinhHoat.create(data).then(hocvien_khusinhhoat => {
            "use strict";
            return callback(null, null, 200, null, hocvien_khusinhhoat);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_khu_sinh_hoat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_khu_sinh_hoat_fail', 400, error, null);
    }
}