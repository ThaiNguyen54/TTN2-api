// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HangHoa from "../models/HangHoa.js";
export function AddHangHoa (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.TenHangHoa, 'string')) {
            return callback(2, 'invalid_name', 400, 'Tên hàng hóa phải là ký tự', null);
        }

        HangHoa.create(data).then(hanghoa => {
            "use strict";
            return callback(null, null, 200, null, hanghoa);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hang_hoa_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hang_hoa_fail', 400, error, null);
    }
}

export function GetAllHangHoa (callback) {
    try {
        HangHoa.findAndCountAll({}).then((data) => {
            let hanghoa = data.rows;
            let output = {
                data: hanghoa
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_hang_hoa_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'find_count_all_hang_hoa_fail', 400, error, null);
    }
}

export function UpdateHangHoa (HangHoaId, HangHoaData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(HangHoaId, 'string')
            && !Helper.VariableTypeChecker(HangHoaId, 'number')) {
            return callback (2, 'id_khu_sinh_hoat_khong_hop_le', 400, 'id khu sinh hoạt không đúng', null)
        }

        if (!HangHoaData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = HangHoaId;
        queryObj.updatedAt = new Date();
        queryObj = HangHoaData

        HangHoa.findOne({where: where}).then(hanghoa => {
            "use strict"
            if(hanghoa) {
                HangHoa.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, HangHoaId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_hàng_hóa_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'hàng_hóa_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_hang_hoa_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_hang_hoa_fail', 400, error);
    }
}

export function DeleteHangHoa (HangHoaId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(HangHoaId, 'string') &&
            !Helper.VariableTypeChecker(HangHoaId, 'number')) {
            return callback(2, 'ivalid_hang_hoa_id', 400, 'id of hang hoa is incorrect', null);
        }

        where = {id: HangHoaId};
        HangHoa.findOne({where:where}).then(hanghoa => {
            "use strict";
            HangHoa.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_hang_hoa_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_hang_hoafailed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'deletet_hang_hoa_failed', 400, error);
    }
}
