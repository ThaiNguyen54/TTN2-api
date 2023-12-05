// Third party component

// Our components
import * as ChiTietMuaManager from '../manager/ChiTietMuaManager.js'
import * as Rest from '../utils/Rest.js'

export function AddChiTietMua(req, res) {

    ChiTietMuaManager.AddChiTietMua(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body.cccd, httpCode)
        }
    })
}

export function GetAllChiTietMua (req, res) {
    ChiTietMuaManager.GetAllChiTietMua(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateChiTietMua (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    ChiTietMuaManager.UpdateChiTietMua(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteChiTietMua (req, res) {
    let id = req.params.id || '';

    ChiTietMuaManager.DeleteChiTietMua(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}
