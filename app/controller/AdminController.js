import * as AdminManager from '../manager/AdminManager.js';
import * as Rest from '../utils/Rest.js';
import JsonWebToken from "jsonwebtoken";
import * as Global from '../config/Gloabl.js'
import e from "express";


export function Login (req, res) {
    console.log(req.body)
    let username = req.body.username;
    let password = req.body.password;

    AdminManager.Authenticate(username, password, function (errorCode, errorMessage, httpCode, errorDescription, result) {
        if (errorCode) {
            return Rest.SendError (res, errorCode, errorMessage, httpCode, errorDescription);
        }
        JsonWebToken.sign({id: result.id, username: result.username, role: result.role}, Global.jwtPublicKey.PublicKey, {expiresIn: '10s'}, function (error, token) {
            if (error) {
                return Rest.SendError(res, 4000, 'create_token_fail', 400, error);
            } else {
                return Rest.SendSuccessToken(res, token, result)
            }
        })
    })
}