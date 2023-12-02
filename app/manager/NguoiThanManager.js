// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import NguoiThan from "../models/NguoiThan.js";
import nguoiThan from "../models/NguoiThan.js";

export function AddNguoiThan (data, callback) {
    try {

        NguoiThan.create(data).then(nguoithan => {
            "use-strict";
            return callback(null, null, 200, null, nguoithan);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_nguoi_than_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_nguoi_than_fail', 400, error, null);
    }
}

export function AddMultipleNguoiThan (data, callback) {
    try {
        NguoiThan.bulkCreate(data).then(nguoithan => {
            "use-strict"
            return callback(null, null, 200, null, nguoithan);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_nguoi_than_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_nguoi_than_fail', 400, error, null);
    }

}