// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import BanGiao from "../models/BanGiao.js";

export function AddBanGiao (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        BanGiao.create(data).then(bangiao => {
            "use strict";
            return callback(null, null, 200, null, bangiao);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_ban_giao_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_ban_giao_fail', 400, error, null);
    }
}
