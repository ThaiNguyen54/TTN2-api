// Third party component

// Our components
import * as KyLuatManager from "../manager/KyLuatManager.js";
import * as Rest from '../utils/Rest.js'

export function AddKyLuat (req, res) {
    KyLuatManager.AddKyLuat(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}