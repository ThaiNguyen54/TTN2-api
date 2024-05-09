// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import khenThuong from "../models/KhenThuong.js";
import KhenThuong from "../models/KhenThuong.js";

export function AddKhenThuong (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.MaHocVien, 'string')) {
            return callback(2, 'invalid_MaHocVien', 400, 'MaHocVien is not a string', null);
        }

        khenThuong.create(data).then(khenthuong => {
            "use strict";
            return callback(null, null, 200, null, khenthuong);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_khen_thuong_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_khen_thuong_fail', 400, error, null);
    }
}

export function GetAllKhenThuong (callback) {
    try {
        KhenThuong.findAndCountAll({}).then((data) => {
            let KhenThuong = data.rows;
            let output = {
                data: KhenThuong
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_khenthuong_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_khenthuong_fail', 400, error, null);
    }
}

export function UpdateKhenThuong (KhenThuongId, KhenThuongData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(KhenThuongId, 'string')
            && !Helper.VariableTypeChecker(KhenThuongId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!KhenThuongData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = KhenThuongId;
        queryObj.updatedAt = new Date();
        queryObj = KhenThuongData

        KhenThuong.findOne({where: where}).then(khenthuong => {
            "use strict"
            if(khenthuong) {
                KhenThuong.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, KhenThuongId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_khen_thuong_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'khen_thuong_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_khenthuong_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_khenthuong_fail', 400, error);
    }
}

export function DeleteKhenThuong (KhenThuongId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(KhenThuongId, 'string') &&
            !Helper.VariableTypeChecker(KhenThuongId, 'number')) {
            return callback(2, 'ivalid_khenthuong_id', 400, 'id of khen thuong is incorrect', null);
        }

        where = {id: KhenThuongId};
        KhenThuong.findOne({where:where}).then(khenthuong => {
            "use strict";
            KhenThuong.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_khenthuong_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_khenthuong_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_khenthuong_failed', 400, error);
    }
}