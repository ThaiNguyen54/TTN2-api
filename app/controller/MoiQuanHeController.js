// Third party component

// Our components
import * as MoiQuanHeManager from '../manager/MoiQuanHeManager.js'
import * as Rest from '../utils/Rest.js'

export function AddMoiQuanHe (req, res) {

    MoiQuanHeManager.AddMoiQuanHe(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}