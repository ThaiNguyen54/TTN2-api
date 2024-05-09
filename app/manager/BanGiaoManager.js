// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import BanGiao from "../models/BanGiao.js";

export function AddBanGiao (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.MaHocVien, 'string')) {
            return callback(2, 'invalid_MaHocVien', 400, 'MaHocVien is not a string', null);
        }

        BanGiao.create(data).then(bangiao => {
            "use strict";
            return callback(null, null, 200, null, bangiao);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_ban_giao_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_ban_giao_fail', 400, error, null);
    }
}

export function GetAllBanGiao (callback) {
    try {
        BanGiao.findAndCountAll({}).then((data) => {
            let BanGiao = data.rows;
            let output = {
                data: BanGiao
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_ban_giao_failed', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_ban_giao_failed', 400, error, null);
    }
}

export function UpdateBanGiao (BanGiaoId, BanGiaoData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(BanGiaoId, 'string')
            && !Helper.VariableTypeChecker(BanGiaoId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!BanGiaoData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = BanGiaoId;
        queryObj.updatedAt = new Date();
        queryObj = BanGiaoData

        BanGiao.findOne({where: where}).then(bangiao => {
            "use strict"
            if(bangiao) {
                BanGiao.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, BanGiaoId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_bàn_giao_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'khu_bàn_giao_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_bangiao_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_bangiao_fail', 400, error);
    }
}

export function DeleteBanGiao (BanGiaoId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(BanGiaoId, 'string') &&
            !Helper.VariableTypeChecker(BanGiaoId, 'number')) {
            return callback(2, 'ivalid_BanGiao_id', 400, 'id of ban giao is incorrect', null);
        }

        where = {id: BanGiaoId};
        BanGiao.findOne({where:where}).then(bangiao => {
            "use strict";
            BanGiao.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_bangiao_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_bangiao_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_bangiao_failed', 400, error);
    }
}