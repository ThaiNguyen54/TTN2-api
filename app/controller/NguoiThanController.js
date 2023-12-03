// Third party component

// Our components
import * as NguoiThanManager from "../manager/NguoiThanManager.js";
import * as Rest from '../utils/Rest.js'
import * as KhuSinhHoatManager from "../manager/KhuSinhHoatManager.js";

export function AddNguoiThan (req, res) {

    NguoiThanManager.AddNguoiThan(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function AddMultipleNguoiThan (req, res) {

    NguoiThanManager.AddMultipleNguoiThan(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function GetAllNguoiThan (req, res) {
    NguoiThanManager.GetAllNguoiThan(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateNguoiThan (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    NguoiThanManager.UpdateNguoiThan(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteNguoiThan (req, res) {
    let id = req.params.id || '';

    NguoiThanManager.DeleteNguoiThan(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}