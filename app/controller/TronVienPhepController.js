// Third party component

// Our components
import * as TronVienPhepManager from "../manager/TronVienPhepManager.js";
import * as Rest from '../utils/Rest.js'

export function AddTronVienPhep (req, res) {
    console.log(req.body)

    TronVienPhepManager.AddTronVienPhep(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function GetAllTronVienPhep (req, res) {
    TronVienPhepManager.GetAllTronVienPhep(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateTronVienPhep (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    TronVienPhepManager.UpdateTronVienPhep(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteTronVienPhep (req, res) {
    let id = req.params.id || '';

    TronVienPhepManager.DeleteTronVienPhep(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

