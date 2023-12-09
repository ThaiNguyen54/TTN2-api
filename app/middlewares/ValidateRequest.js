// Third party components
import JsonWebToken from "jsonwebtoken";

// Our components
import * as GlobalConfig from "../config/Gloabl.js"
import * as Rest from "../utils/Rest.js"
import * as AdminManager from '../manager/AdminManager.js'
import e from "express";

export function Validate (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    let token = (req.body && req.body.access_token) || req.headers['access_token'] || (req.query && req.query.access_token);

    if (token) {
        try {
            JsonWebToken.verify(token, GlobalConfig.jwtPublicKey.PublicKey, function (error, decoded) {
                if (error) {
                    return Rest.SendError(res, 70, 'verify_token_fail', 400, error);
                }

                AdminManager.VerifyAdmin(decoded.id, decoded.role, decoded.username, function (errorCode, errorMessage, httpCode, errorDescription, result) {
                    if (errorCode) {
                        return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
                    }
                    if (req.method === 'GET') {
                        req.query.AdminId = decoded.id;
                        req.query.Role = decoded.role;
                        req.query.Username = decoded.username;
                    } else {
                        req.body.AdminId = decoded.id;
                        req.body.Role = decoded.role;
                        req.body.Username = decoded.username;
                    }
                    next()
                })

            })
        } catch (error) {
            return Rest.SendError(res, 4170, 'system', 400, error);
        }
    } else {
        return Rest.SendError(res, 4178, 'invalid_token', 400, null);
    }
}