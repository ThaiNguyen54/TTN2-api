// Third party component

// Our components
import * as HangHoaManager from '../manager/HangHoaManager.js'
import * as Rest from '../utils/Rest.js'

export function AddHangHoa (req, res) {

    HangHoaManager.AddHangHoa(req.body, function (errorCode, errorMess, httpCode, errorDescription, hanghoa) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body.id, httpCode)
        }
    })
}

export function GetAllHangHoa (req, res) {
    HangHoaManager.GetAllHangHoa(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateHangHoa (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    HangHoaManager.UpdateHangHoa(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteHangHoa (req, res) {
    let id = req.params.id || '';

    HangHoaManager.DeleteHangHoa(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}
