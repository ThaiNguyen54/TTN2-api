// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
import Bcrypt from 'bcryptjs'

// Our components
import * as Helper from '../utils/Helper.js'
import Admin from "../models/Admin.js";
import e from "express";

export function Authenticate (username, password, callback) {
    try {
        if (!Helper.VariableTypeChecker(username, 'string')) {
            return callback(1, 'invalid_user_name', 422, 'username is not a string', null);
        }

        if (!Helper.VariableTypeChecker(password, 'string')) {
            return callback(1, 'invalid_user_password', 422, 'password is not a string', null);
        }

        let where = {username: username};
        let attributes = ['id', 'username', 'password', 'role'];

        Admin.findOne({
            where: where,
            attributes: attributes
        }).then( account => {
            "use strict";
            if (account) {
                Bcrypt.compare(password, account.password, function (error, result) {
                    if (result === true) {
                        return callback(null, null, 200, null, account)
                    } else {
                        return callback(1, 'wrong_password', 422, null, null);
                    }
                })
            } else {
                return callback(1, 'invalid_user_name', 404, null, null)
            }
        }).catch(function (error) {
            "use strict"
            return callback(1, 'find_one_admin_fail', 400, error, null)
        });
    } catch (error) {
        return callback(1, 'authenticate_admin_fail', 400, error, null)
    }
}