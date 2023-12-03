// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import NguoiThan from "../models/NguoiThan.js";

export function AddNguoiThan (data, callback) {
    try {

        NguoiThan.create(data).then(nguoithan => {
            "use-strict";
            return callback(null, null, 200, null, nguoithan);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_nguoi_than_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_nguoi_than_fail', 400, error, null);
    }
}

export function AddMultipleNguoiThan (data, callback) {
    try {
        NguoiThan.bulkCreate(data).then(nguoithan => {
            "use-strict"
            return callback(null, null, 200, null, nguoithan);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_nguoi_than_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_nguoi_than_fail', 400, error, null);
    }
}

export function GetAllNguoiThan (callback) {
    try {
        NguoiThan.findAndCountAll({}).then((data) => {
            let NguoiThan = data.rows;
            let output = {
                data: NguoiThan
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_nguoi_than_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_nguoi_than_fail', 400, error, null);
    }
}

export function UpdateNguoiThan (NguoiThanId, NguoiThanData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(NguoiThanId, 'string')
            && !Helper.VariableTypeChecker(NguoiThanId, 'number')) {
            return callback (2, 'id_khu_nguoi_than_khong_hop_le', 400, 'id người thân không đúng', null)
        }

        if (!NguoiThanData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = NguoiThanId;
        queryObj.updatedAt = new Date();
        queryObj = NguoiThanData

        NguoiThan.findOne({where: where}).then(nguoithan => {
            "use strict"
            if(nguoithan) {
                NguoiThan.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, NguoiThanId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_người_thân_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'khu_người_thân_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_nguoi_than_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_nguoi_than_fail', 400, error);
    }
}

export function DeleteNguoiThan (NguoiThanId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(NguoiThanId, 'string') &&
            !Helper.VariableTypeChecker(NguoiThanId, 'number')) {
            return callback(2, 'ivalid_nguoithan_id', 400, 'id of nguoi than is incorrect', null);
        }

        where = {id: NguoiThanId};
        NguoiThan.findOne({where:where}).then(khusinhhoat => {
            "use strict";
            NguoiThan.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_nguoi_than_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_nguoi_than_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_nguoi_than_failed', 400, error);
    }
}