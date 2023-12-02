// Third party component

// Our components
import * as HocVien_CNBatBuocManager from "../manager/HocVien_CNBatBuocManager.js";
import * as Rest from '../utils/Rest.js'
import HocVien_CNBatBuoc from "../models/HocVien_CNBatBuoc.js";

export function AddHocVien_CNBB (req, res) {
    HocVien_CNBatBuocManager.AddHocVien_CNBatBuoc(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}