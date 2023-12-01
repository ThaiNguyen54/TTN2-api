// Third party component

// Our components
import * as TronVienPhepManager from "../manager/TronVienPhepManager.js";
import * as Rest from '../utils/Rest.js'

export function AddTronVienPhep (req, res) {
    console.log(req.body)

    TronVienPhepManager.AddTronVienPhep(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, req.body, httpCode)
        }
    })
}