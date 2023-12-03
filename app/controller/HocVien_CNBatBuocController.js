// Third party component

// Our components
import * as HocVien_CNBatBuocManager from "../manager/HocVien_CNBatBuocManager.js";
import * as Rest from '../utils/Rest.js'
import HocVien_CNBatBuoc from "../models/HocVien_CNBatBuoc.js";
import * as KhuSinhHoatManager from "../manager/KhuSinhHoatManager.js";

export function AddHocVien_CNBB (req, res) {
    HocVien_CNBatBuocManager.AddHocVien_CNBatBuoc(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function GeAllCNBB (req, res) {
    HocVien_CNBatBuocManager.GetAllCNBB(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateCNBB (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    HocVien_CNBatBuocManager.UpdateCNBB(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteCNBB (req, res) {
    let id = req.params.id || '';

    HocVien_CNBatBuocManager.DeleteCNBB(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}