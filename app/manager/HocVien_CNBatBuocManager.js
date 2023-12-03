// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HocVien_CNBatBuoc from "../models/HocVien_CNBatBuoc.js";
import sql from "mysql";
import DatabaseConfig from "../config/Database.js";
import KhuSinhHoat from "../models/KhuSinhHoat.js";

export function AddHocVien_CNBatBuoc (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien_CNBatBuoc.create(data).then(hocvien_cnbb => {
            "use strict";
            return callback(null, null, 200, null, hocvien_cnbb);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_cnbb_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_cnbb_fail', 400, error, null);
    }
}

export function GetAllCNBB (callback) {
    try {
        const queryString = `
        select HV_CNBatBuoc.*,
               HocVien.Ho,
               HocVien.Ten
        from HV_CNBatBuoc
        inner  join HocVien on HV_CNBatBuoc.cccd = HocVien.cccd;`

        let conn = sql.createConnection(DatabaseConfig.mysql)

        conn.connect(function (err) {
            if (err) throw err;
            // console.log('Connected')
            conn.query(queryString, function (error, result, fields) {
                if (err) throw err;
                let output = {
                    data: result
                }
                return callback(null, null, 200, null, output);
            })
        })
    } catch (error) {
        return callback(2, 'get_all_CNBB_fail', 400, error, null);
    }
}

export function UpdateCNBB (CNBBId, CNBBData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(CNBBId, 'string')
            && !Helper.VariableTypeChecker(CNBBId, 'number')) {
            return callback (2, 'id_dot_cai_nghien_bat_buoc_khong_hop_le', 400, 'id đợt cai nghiện bắt buộc không đúng', null)
        }

        if (!CNBBData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = CNBBId;
        queryObj.updatedAt = new Date();
        queryObj = CNBBData

        HocVien_CNBatBuoc.findOne({where: where}).then(hocvien_cnbb => {
            "use strict"
            if(hocvien_cnbb) {
                HocVien_CNBatBuoc.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, CNBBId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_cai_nghiện_bắt_buộc_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'cai_nghiện_bắt_buộc_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_cnbb_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_cnbb_fail', 400, error);
    }
}


export function DeleteCNBB (CNBBId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(CNBBId, 'string') &&
            !Helper.VariableTypeChecker(CNBBId, 'number')) {
            return callback(2, 'ivalid_cnbb_id', 400, 'id of cnbb is incorrect', null);
        }

        where = {id: CNBBId};
        HocVien_CNBatBuoc.findOne({where:where}).then(hocvien_cnbb => {
            "use strict";
            HocVien_CNBatBuoc.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_cnbb_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_cnbb_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_cnbb_failed', 400, error);
    }
}