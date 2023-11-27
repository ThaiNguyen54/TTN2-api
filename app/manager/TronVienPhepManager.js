// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import TronVienPhep from "../models/TronVienPhep.js";

export function AddTronVienPhep (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        TronVienPhep.create(data).then(tronvienphep => {
            "use strict";
            return callback(null, null, 200, null, tronvienphep);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_tron_vien_phep_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_tron_vien_phep_fail', 400, error, null);
    }
}