// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HocVien_KhuSinhHoat from "../models/HocVien_KhuSinhHoat.js";

export function AddHocVien_KhuSinhHoat (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien_KhuSinhHoat.create(data).then(hocvien_khusinhhoat => {
            "use strict";
            return callback(null, null, 200, null, hocvien_khusinhhoat);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_khu_sinh_hoat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_khu_sinh_hoat_fail', 400, error, null);
    }
}

export function GetAllHocVienKhuSinhHoat (callback) {
    try {
        HocVien_KhuSinhHoat.findAndCountAll({}).then((data) => {
            let HocVien_KhuSinhHoat = data.rows;
            let output = {
                data: HocVien_KhuSinhHoat
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_hocvien_khusinhhoat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_hocvien_khusinhhoat_fail', 400, error, null);
    }
}

export function UpdateHocVienKhuSinhHoat (HocVien_KhuSinhHoatId, HocVien_KhuSinhHoatData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(HocVien_KhuSinhHoatId, 'string')
            && !Helper.VariableTypeChecker(HocVien_KhuSinhHoatId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!HocVien_KhuSinhHoatData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = HocVien_KhuSinhHoatId;
        queryObj.updatedAt = new Date();
        queryObj = HocVien_KhuSinhHoatData

        HocVien_KhuSinhHoat.findOne({where: where}).then(hocvien_khusinhhoat => {
            "use strict"
            if(hocvien_khusinhhoat) {
                HocVien_KhuSinhHoat.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, HocVien_KhuSinhHoatId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'invalid_data', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'get_data_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_data_fail', 400, error);
    }
}

export function DeleteHocVienKhuSinhHoat (HocVien_KhuSinhHoatId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(HocVien_KhuSinhHoatId, 'string') &&
            !Helper.VariableTypeChecker(HocVien_KhuSinhHoatId, 'number')) {
            return callback(2, 'ivalid_id', 400, 'id incorrect', null);
        }

        where = {id: HocVien_KhuSinhHoatId};
        HocVien_KhuSinhHoat.findOne({where:where}).then(hocvienkhusinhhoat => {
            "use strict";
            HocVien_KhuSinhHoat.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'get_data_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_failed', 400, error);
    }
}


