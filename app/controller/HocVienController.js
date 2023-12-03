// Third party component

// Our components
import * as HVManager from '../manager/HocVienManager.js'
import * as Rest from '../utils/Rest.js'
import * as Helper from '../utils/Helper.js'
import HocVien from "../models/HocVien.js";

export function AddHocVien (req, res) {
    req.body.Tuoi = Helper.GetAge(req.body.NgaySinh)
    HocVien.findOne({
        where: {
            cccd: req.body.cccd
        }
    }).then(function (hocvien) {
        if (!hocvien) {
            HVManager.AddHocVien(req.body, function (errorCode, errorMess, httpCode, errorDescription, hocvien) {
                if (errorCode) {
                    return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
                } else {
                    return Rest.SendSuccess(res, req.body.cccd, httpCode)
                }
            })
        } else {
            return Rest.SendSuccess(res, req.body.cccd, 200, 'Học Viên Đã Tồn Tại')
        }
    })
}

export function GetAllHocVien (req, res) {
    HVManager.GetAll(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}

export function FindAllAndContCNHocVien (req, res) {
    HVManager.FindAllAndCount(function (errorCode, errorMess, httpCode, errorDescription, results) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMess, httpCode, errorDescription);
        } else {
            return Rest.SendSuccess(res, results, httpCode);
        }
    });
}


export function UpdateHocVien (req, res) {
    let cccd = req.params.cccd || '';

    let updateData = req.body || '';

    const fieldToExclude = ['cccd', 'createdAt', 'createdBy', 'updatedAt', 'updatedBy'];

     updateData = Object.fromEntries(
        Object.entries(updateData).filter(([key]) => !fieldToExclude.includes(key))
    );

    console.log(updateData)

    HVManager.UpdateHocVien(cccd, updateData, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.cccd = cccd;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}

export function DeleteHocVien (req, res) {
    let cccd = req.params.cccd || '';

    HVManager.DeleteHocVien(cccd, function (errorCode, errorMessage, httpCode, errorDescription){
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let resData = {};
        resData.cccd = cccd;
        return Rest.SendSuccess(res, resData, httpCode);
    })
}
