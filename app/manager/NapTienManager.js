// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import NapTien from "../models/NapTien.js";

export function AddNapTien (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd phải là ký tự', null);
        }

        NapTien.create(data).then(naptien => {
            "use strict";
            return callback(null, null, 200, null, naptien);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_nap_tien_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_nap_tien_fail', 400, error, null);
    }
}

export function GetAllNapTien (callback) {
    try {
        NapTien.findAndCountAll({}).then((data) => {
            let naptien = data.rows;
            let output = {
                data: naptien
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_nap_tien_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_nap_tien_fail', 400, error, null);
    }
}

export function UpdateNapTien (NapTienId, NapTienData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(NapTienId, 'string')
            && !Helper.VariableTypeChecker(NapTienId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!NapTienData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = NapTienId;
        queryObj.updatedAt = new Date();
        queryObj = NapTienData

        NapTien.findOne({where: where}).then(naptien => {
            "use strict"
            if(naptien) {
                NapTien.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, NapTienId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_nap_tien_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'nap_tien_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_nap_tien_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_nap_tien_hoat_fail', 400, error);
    }
}

export function DeleteNapTien (NapTienId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(NapTienId, 'string') &&
            !Helper.VariableTypeChecker(NapTienId, 'number')) {
            return callback(2, 'ivalid_nap_tien_id', 400, 'id of nap tien is incorrect', null);
        }

        where = {id: NapTienId};
        NapTien.findOne({where:where}).then(khusinhhoat => {
            "use strict";
            NapTien.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_nap_tien_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_nap_tien_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_nap_tien_failed', 400, error);
    }
}
