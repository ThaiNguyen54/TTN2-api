// Third party component

// Our components
import * as HVManager from '../manager/HocVienManager.js'
import * as Rest from '../utils/Rest.js'

export function AddHocVien (req, res) {

    HVManager.AddHocVien(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
             return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body.cccd, httpCode)
        }
    })
}

export function GetAllHocVien (req, res) {
    HVManager.GetAll(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}
