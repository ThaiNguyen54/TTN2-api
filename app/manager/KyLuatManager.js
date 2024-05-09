// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import KyLuat from "../models/KyLuat.js";
import KhuSinhHoat from "../models/KhuSinhHoat.js";

export function AddKyLuat (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.MaHocVien, 'string')) {
            return callback(2, 'invalid_MaHocVien', 400, 'MaHocVien is not a string', null);
        }

        KyLuat.create(data).then(kyluat => {
            "use strict";
            return callback(null, null, 200, null, kyluat);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_ky_luat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_ky_luat_fail', 400, error, null);
    }
}

export function GetAllKyLuat (callback) {
    try {
        KyLuat.findAndCountAll({}).then((data) => {
            let KyLuat = data.rows;
            let output = {
                data: KyLuat
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_kyluat_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_kyluat_fail', 400, error, null);
    }
}

export function UpdateKyLuat (KyLuatId, KyLuatData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(KyLuatId, 'string')
            && !Helper.VariableTypeChecker(KyLuatId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!KyLuatData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = KyLuatId;
        queryObj.updatedAt = new Date();
        queryObj = KyLuatData

        KyLuat.findOne({where: where}).then(kyluat => {
            "use strict"
            if(kyluat) {
                KyLuat.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, KyLuatId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_kyluat_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'kyluat_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_kyluat_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_kyluat_fail', 400, error);
    }
}

export function DeleteKyLuat (KyLuatId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(KyLuatId, 'string') &&
            !Helper.VariableTypeChecker(KyLuatId, 'number')) {
            return callback(2, 'ivalid_kyluat_id', 400, 'id of ky luat is incorrect', null);
        }

        where = {id: KyLuatId};
        KyLuat.findOne({where:where}).then(khusinhhoat => {
            "use strict";
            KyLuat
                .destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_kyluat_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_kyluat_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_kyluat_failed', 400, error);
    }
}