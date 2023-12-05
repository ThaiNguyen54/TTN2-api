// Third party component

// Our components
import * as NapTienManager from '../manager/NapTienManager.js'
import * as Rest from '../utils/Rest.js'

export function AddNapTien (req, res) {

    NapTienManager.AddNapTien(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body.cccd, httpCode)
        }
    })
}

export function GetAllNapTien (req, res) {
    NapTienManager.GetAllNapTien(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateNapTien (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    NapTienManager.UpdateNapTien(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteNapTien (req, res) {
    let id = req.params.id || '';

    NapTienManager.DeleteNapTien(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}
