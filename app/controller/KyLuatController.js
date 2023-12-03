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

export function GetAllKyLuat (req, res) {
    KyLuatManager.GetAllKyLuat(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateKyLuat (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    KyLuatManager.UpdateKyLuat(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteKyLuat (req, res) {
    let id = req.params.id || '';

    KyLuatManager.DeleteKyLuat(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}