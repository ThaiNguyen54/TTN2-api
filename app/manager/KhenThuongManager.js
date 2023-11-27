// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import khenThuong from "../models/KhenThuong.js";

export function AddKhenThuong (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        khenThuong.create(data).then(khenthuong => {
            "use strict";
            return callback(null, null, 200, null, khenthuong);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_khen_thuong_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_khen_thuong_fail', 400, error, null);
    }
}