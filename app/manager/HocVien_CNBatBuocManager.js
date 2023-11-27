// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HocVien_CNBatBuoc from "../models/HocVien_CNBatBuoc.js";

export function AddHocVien_CNBatBuoc (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien_CNBatBuoc.create(data).then(hocvien_cnbb => {
            "use strict";
            return callback(null, null, 200, null, hocvien_cnbb);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_cnbb_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_cnbb_fail', 400, error, null);
    }
}
