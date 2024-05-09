// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import ChiTietMua from "../models/ChiTietMua.js";


export function AddChiTietMua (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.MaHocVien, 'string')) {
            return callback(2, 'invalid_MaHocVien', 400, 'MaHocVien phải là ký tự', null);
        }

        ChiTietMua.create(data).then(chitietmua => {
            "use strict";
            return callback(null, null, 200, null, chitietmua);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_chi_tiett_mua_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_chi_tiet_mua_fail', 400, error, null);
    }
}

export function GetAllChiTietMua (callback) {
    try {
        ChiTietMua.findAndCountAll({}).then((data) => {
            let chitietmua = data.rows;
            let output = {
                data: chitietmua
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_chi_tiet_mua_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_chi_tiet_mua_fail', 400, error, null);
    }
}

export function UpdateChiTietMua (ChiTietMuaId, ChiTietMuaData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(ChiTietMuaId, 'string')
            && !Helper.VariableTypeChecker(ChiTietMuaId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!ChiTietMuaData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = ChiTietMuaId;
        queryObj.updatedAt = new Date();
        queryObj = ChiTietMuaData

        ChiTietMua.findOne({where: where}).then(chitietmua => {
            "use strict"
            if(chitietmua) {
                ChiTietMua.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, ChiTietMuaId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_chi_tiet_mua_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'chi_tiet_mua_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_chi_tiet_mua_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_chi_tiet_mua_fail', 400, error);
    }
}


export function DeleteChiTietMua (ChiTietMuaId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(ChiTietMuaId, 'string') &&
            !Helper.VariableTypeChecker(ChiTietMuaId, 'number')) {
            return callback(2, 'ivalid_chi_tiet_mua_id', 400, 'id of chi tiet mua is incorrect', null);
        }

        where = {id: ChiTietMuaId};
        ChiTietMua.findOne({where:where}).then(khusinhhoat => {
            "use strict";
            ChiTietMua.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_chi_tiet_mua_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_chi_tiet_mua_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_chi_tiet_mau_failed', 400, error);
    }
}
