// Third party component

// Our components
import * as HocVien_CNTuNguyenManager from "../manager/HocVien_CNTuNguyenManager.js";
import * as Rest from '../utils/Rest.js'

export function AddHocVien_CNTN (req, res) {

    HocVien_CNTuNguyenManager.AddHocVien_CNTuNguyen(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}

export function GeAllCNTN (req, res) {
    HocVien_CNTuNguyenManager.GetAllCNTN(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function UpdateCNTN (req, res) {
    let id = req.params.id || '';

    let updateData = req.body || '';
    HocVien_CNTuNguyenManager.UpdateCNTN(id, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteCNTN (req, res) {
    let id = req.params.id || '';

    HocVien_CNTuNguyenManager.DeleteCNTN(id, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.id = id;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}