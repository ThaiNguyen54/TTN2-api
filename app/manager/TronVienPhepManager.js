// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import TronVienPhep from "../models/TronVienPhep.js";

export function AddTronVienPhep (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.MaHocVien, 'string')) {
            return callback(2, 'invalid_MaHocVien', 400, 'MaHocVien is not a string', null);
        }

        TronVienPhep.create(data).then(tronvienphep => {
            "use strict";
            return callback(null, null, 200, null, tronvienphep);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_tron_vien_phep_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_tron_vien_phep_fail', 400, error, null);
    }
}

export function GetAllTronVienPhep (callback) {
    try {
        TronVienPhep.findAndCountAll({}).then((data) => {
            let TronVienPhep = data.rows;
            let output = {
                data: TronVienPhep
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_tron_vien_phep_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_tron_vien_phep_fail', 400, error, null);
    }
}

export function UpdateTronVienPhep (TronVienPhepId, TronVienPhepData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(TronVienPhepId, 'string')
            && !Helper.VariableTypeChecker(TronVienPhepId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!TronVienPhepData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = TronVienPhepId;
        queryObj.updatedAt = new Date();
        queryObj = TronVienPhepData

        TronVienPhep.findOne({where: where}).then(tronvienphep => {
            "use strict"
            if(tronvienphep) {
                TronVienPhep.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, tronvienphep)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_tron_vien_phep_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'tron_vien_phep_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_tron_vien_phep_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_tron_vien_phep_fail', 400, error);
    }
}

export function DeleteTronVienPhep (TronVienPhepId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(TronVienPhepId, 'string') &&
            !Helper.VariableTypeChecker(TronVienPhepId, 'number')) {
            return callback(2, 'ivalid_tron_vien_phep_id', 400, 'id of tron vien phep is incorrect', null);
        }

        where = {id: TronVienPhepId};
        TronVienPhep.findOne({where:where}).then(tronvienphep => {
            "use strict";
            TronVienPhep.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_tronvienphep_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_tron_vien_phepfailed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_tron_vien_phep_failed', 400, error);
    }
}
