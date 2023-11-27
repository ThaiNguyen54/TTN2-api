// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import KhuSinhHoat from "../models/KhuSinhHoat.js";
export function AddKhuSinhHoat (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.TenKhu, 'string')) {
            return callback(2, 'invalid_name', 400, 'Tên khu sinh hoạt phải là ký tự', null);
        }

        KhuSinhHoat.create(data).then(khusinhoat => {
            "use strict";
            return callback(null, null, 200, null, khusinhoat);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_khu_sinh_hoat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_khu_sinh_hoat_fail', 400, error, null);
    }
}