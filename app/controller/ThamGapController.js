// Third party component

// Our components
import * as ThamGapManager from "../manager/ThamGapManager.js";
import * as Rest from '../utils/Rest.js'

export function AddThamGap (req, res) {

    ThamGapManager.AddThamgap(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function GetAllThamGap (req, res) {
    ThamGapManager.GetAllThamGap(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateThamGap (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    ThamGapManager.UpdateThamGap(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteThamGap (req, res) {
    let id = req.params.id || '';

    ThamGapManager.DeleteThamGap(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}