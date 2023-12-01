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