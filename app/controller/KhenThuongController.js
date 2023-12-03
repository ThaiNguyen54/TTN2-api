// Third party component

// Our components
import * as KhenThuongManager from '../manager/KhenThuongManager.js'
import * as Rest from '../utils/Rest.js'

export function AddKhenThuong (req, res) {
    KhenThuongManager.AddKhenThuong(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function GetAllKhenThuong (req, res) {
    KhenThuongManager.GetAllKhenThuong(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateKhenThuong (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    KhenThuongManager.UpdateKhenThuong(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteKhenThuong (req, res) {
    let id = req.params.id || '';

    KhenThuongManager.DeleteKhenThuong(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}