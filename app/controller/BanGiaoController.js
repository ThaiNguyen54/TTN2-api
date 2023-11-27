// Third party component

// Our components
import * as BanGiaoManager from '../manager/BanGiaoManager.js'
import * as Rest from '../utils/Rest.js'

export function AddHocVien (req, res) {

    BanGiaoManager.AddBanGiao(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}