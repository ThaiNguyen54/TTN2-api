// Third party component

// Our components
import * as BanGiaoManager from '../manager/BanGiaoManager.js'
import * as Rest from '../utils/Rest.js'
import * as KhuSinhHoatManager from "../manager/KhuSinhHoatManager.js";

export function AddHocVien (req, res) {

    BanGiaoManager.AddBanGiao(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function GetAllBanGiao (req, res) {
    BanGiaoManager.GetAllBanGiao(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateBanGiao (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    BanGiaoManager.UpdateBanGiao(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteBanGiao (req, res) {
    let id = req.params.id || '';

    BanGiaoManager.DeleteBanGiao(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}