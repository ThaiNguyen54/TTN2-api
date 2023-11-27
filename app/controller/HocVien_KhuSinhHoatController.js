// Third party component

// Our components
import * as HocVien_KhuSinhHoatManager from "../manager/HocVien_KhuSinhHoatManager.js";
import * as Rest from '../utils/Rest.js'

export function AddHocVien_KhuSinhHoat (req, res) {

    HocVien_KhuSinhHoatManager.AddHocVien_KhuSinhHoat(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}