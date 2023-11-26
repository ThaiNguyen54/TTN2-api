// Third party components
import JsonWebToken from "jsonwebtoken";

// Our components
import * as GlobalConfig from "../config/Gloabl.js"
import * as Rest from "../utils/Rest.js"

export function Validate (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    let token = (req.body && req.body.access_token) || req.header['access_token'] || (req.query && req.query.access_token);

    if (token) {
        try {
            JsonWebToken.verify(token, GlobalConfig.jwtPublicKey.PublicKey, function (error, decoded) {
                if (error) {
                    return Rest.SendError(res, 70, 'verify_token_fail', 400, error);
                }
            })
        } catch (error) {
            return Rest.SendError(res, 4170, 'system', 400, error);
        }
    } else {
        return Rest.SendError(res, 4178, 'invalid_token', 400, null);
    }
}