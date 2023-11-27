// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HocVien_CNTuNguyen from "../models/HocVien_CNTuNguyen.js";

export function AddHocVien_CNTuNguyen (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien_CNTuNguyen.create(data).then(hocvien_cntn => {
            "use strict";
            return callback(null, null, 200, null, hocvien_cntn);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_cntn_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_cntn_fail', 400, error, null);
    }
}