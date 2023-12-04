// Third-party components
import Validator from 'validator';
import JsonWebToken from 'jsonwebtoken';
import moment from 'moment';
// Our components
import * as Helper from '../utils/Helper.js'
import HocVien_CNTuNguyen from "../models/HocVien_CNTuNguyen.js";
import sql from "mysql";
import DatabaseConfig from "../config/Database.js";

export function AddHocVien_CNTuNguyen (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien_CNTuNguyen.create(data).then(hocvien_cntn => {
            "use strict";
            return callback(null, null, 200, null, hocvien_cntn);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_cntn_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_cntn_fail', 400, error, null);
    }
}

export function GetAllCNTN (callback) {
    try {
        const queryString = `
        select HV_CNTuNguyen.*,
               HocVien.Ho,
               HocVien.Ten
        from HV_CNTuNguyen
        inner  join HocVien on HV_CNTuNguyen.cccd = HocVien.cccd;`

        let conn = sql.createConnection(DatabaseConfig.mysql)

        conn.connect(function (err) {
            if (err) throw err;
            // console.log('Connected')
            conn.query(queryString, function (error, result, fields) {
                if (err) throw err;
                console.log(result)
                let output = {
                    data: result
                }
                return callback(null, null, 200, null, output);
            })
        })
    } catch (error) {
        return callback(2, 'get_all_CNTN_fail', 400, error, null);
    }
}

export function UpdateCNTN (CNTNId, CNTNData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(CNTNId, 'string')
            && !Helper.VariableTypeChecker(CNTNId, 'number')) {
            return callback (2, 'id_dot_cai_nghien_tu_nguyen_khong_hop_le', 400, 'id đợt cai nghiện tự nguyện không đúng', null)
        }

        if (!CNTNData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.id = CNTNId;
        queryObj.updatedAt = new Date();
        queryObj = CNTNData

        HocVien_CNTuNguyen.findOne({where: where}).then(hocvien_cntn => {
            "use strict"
            if(hocvien_cntn) {
                HocVien_CNTuNguyen.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, CNTNId)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_cai_nghiện_tự_nguyện_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'cai_nghiện_tự_nguyện_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_cntn_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_cntn_fail', 400, error);
    }
}

export function DeleteCNTN (CNTNId, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(CNTNId, 'string') &&
            !Helper.VariableTypeChecker(CNTNId, 'number')) {
            return callback(2, 'ivalid_cntn_id', 400, 'id of cntn is incorrect', null);
        }

        where = {id: CNTNId};
        HocVien_CNTuNguyen.findOne({where:where}).then(hocvien_cntn => {
            "use strict";
            HocVien_CNTuNguyen.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_cntn_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_cntn_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_cntn_failed', 400, error);
    }
}