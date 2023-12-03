// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import KhuSinhHoat from "../models/KhuSinhHoat.js";
import HocVien from "../models/HocVien.js";
import khuSinhHoat from "../models/KhuSinhHoat.js";
export function AddKhuSinhHoat (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.TenKhu, 'string')) {
            return callback(2, 'invalid_name', 400, 'Tên khu sinh hoạt phải là ký tự', null);
        }

        KhuSinhHoat.create(data).then(khusinhoat => {
            "use strict";
            return callback(null, null, 200, null, khusinhoat);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_khu_sinh_hoat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_khu_sinh_hoat_fail', 400, error, null);
    }
}

export function GetAllKhuSinhHoat (callback) {
    try {
        KhuSinhHoat.findAndCountAll({
            attributes: ['id', 'TenKhu']
        }).then((data) => {
            let KhuSinhHoat = data.rows;
            let output = {
                data: KhuSinhHoat
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_khusinhhoat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_khusinhhoat_fail', 400, error, null);
    }
}

export function UpdateKhuSinhHoat (khuSinhHoatId, khuSinhHoatData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(khuSinhHoatId, 'string')
            && !Helper.VariableTypeChecker(khuSinhHoatId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!khuSinhHoatData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = khuSinhHoatId;
        queryObj.updatedAt = new Date();
        queryObj.TenKhu = khuSinhHoatData.TenKhu

        KhuSinhHoat.findOne({where: where}).then(khusinhhoat => {
            "use strict"
            if(khusinhhoat) {
                KhuSinhHoat.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, khuSinhHoatId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_khu_sinh_hoạt_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'khu_sinh_hoạt_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_khusinhhoat_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_khu_sinh_hoat_fail', 400, error);
    }
}

export function DeleteKhuSinhHoat (khuSinhHoatId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(khuSinhHoatId, 'string') &&
            !Helper.VariableTypeChecker(khuSinhHoatId, 'number')) {
            return callback(2, 'ivalid_khusinhhoat_id', 400, 'id of khu-sinh-hoat is incorrect', null);
        }

        where = {id: khuSinhHoatId};
        KhuSinhHoat.findOne({where:where}).then(khusinhhoat => {
            "use strict";
            KhuSinhHoat.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_khusinhhoat_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_khusinhhoat_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_khusinhhoat_failed', 400, error);
    }
}