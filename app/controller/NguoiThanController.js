// Third party component

// Our components
import * as NguoiThanManager from "../manager/NguoiThanManager.js";
import * as Rest from '../utils/Rest.js'

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