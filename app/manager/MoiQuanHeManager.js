// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import MoiQuanHe from "../models/MoiQuanHe.js";

export function AddMoiQuanHe (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        MoiQuanHe.create(data).then(moiquanhe => {
            "use strict";
            return callback(null, null, 200, null, moiquanhe);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_moi_quan_he_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_moi_quan_he_fail', 400, error, null);
    }
}