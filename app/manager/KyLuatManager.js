// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import KyLuat from "../models/KyLuat.js";

export function AddKyLuat (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        KyLuat.create(data).then(kyluat => {
            "use strict";
            return callback(null, null, 200, null, kyluat);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_ky_luat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_ky_luat_fail', 400, error, null);
    }
}