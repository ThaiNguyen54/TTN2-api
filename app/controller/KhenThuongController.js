// Third party component

// Our components
import * as KhenThuongManager from '../manager/KhenThuongManager.js'
import * as Rest from '../utils/Rest.js'

export function AddKhenThuong (req, res) {
    console.log(req.body)

    KhenThuongManager.AddKhenThuong(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}