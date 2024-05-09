// Third party component

// Our components
import * as KhuSinhHoatManager from '../manager/KhuSinhHoatManager.js'
import * as Rest from '../utils/Rest.js'

export function AddKhuSinhHoat (req, res) {

    console.log('this is req: ', req.body)
    KhuSinhHoatManager.AddKhuSinhHoat(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body.id, httpCode)
        }
    })
}

export function GetAllKhuSinhHoat (req, res) {
    KhuSinhHoatManager.GetAllKhuSinhHoat(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateKhuSinhHoat (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    KhuSinhHoatManager.UpdateKhuSinhHoat(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteKhuSinhHoat (req, res) {
    let id = req.params.id || '';

    KhuSinhHoatManager.DeleteKhuSinhHoat(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}
