// Third party component

// Our components
import * as KhuSinhHoatManager from '../manager/KhuSinhHoatManager.js'
import * as Rest from '../utils/Rest.js'

export function AddKhuSinhHoat (req, res) {

    KhuSinhHoatManager.AddKhuSinhHoat(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body.cccd, httpCode)
        }
    })
}