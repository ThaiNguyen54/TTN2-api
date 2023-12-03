// Third-party components
import sql from 'mysql'

// Our components
import * as Helper from '../utils/Helper.js'
import HocVien from "../models/HocVien.js";
import DatabaseConfig from '../config/Database.js'

export function AddHocVien (data, callback) {
    try {
        if ( !Helper.VariableTypeChecker(data.cccd, 'string')) {
            return callback(2, 'invalid_cccd', 400, 'cccd is not a string', null);
        }

        HocVien.create(data).then(hocvien => {
            "use strict";
            return callback(null, null, 200, null, hocvien);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'add_hoc_vien_fail', 400, error, null);
    }
}

export function GetAll (callback) {
    try {
        HocVien.findAndCountAll({
            attributes: {
                exclude: ['TenDayDu', 'createdBy', 'updatedAt', 'updatedBy']
            }
        }).then((data) => {
            let HocVien = data.rows;
            let output = {
                data: HocVien
            }
            return callback(null, null, 200, null, output);
        }).catch(function (error) {
            return callback(2, 'find_count_all_hocvien_fail', 400, error, null);
        })
    } catch (error) {
        return callback(2, 'get_all_hocvien_fail', 400, error, null);
    }
}

export async function FindAllAndCount(callback) {
    try {
        const queryString = `
      SELECT HocVien.*, 
             COUNT(HV_CNTuNguyen.cccd) AS Count_CNTuNguyen,
             COUNT(HV_CNBatBuoc.cccd) AS Count_CNBatBuoc
      FROM HocVien
      LEFT JOIN HV_CNTuNguyen ON HocVien.cccd = HV_CNTuNguyen.cccd
      LEFT JOIN HV_CNBatBuoc ON HocVien.cccd = HV_CNBatBuoc.cccd
      GROUP BY HocVien.cccd;
    `;
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
        return callback(2, 'get_all_and_count_fail', 400, error, null);
    }
}

export function UpdateHocVien (cccd, hocVienData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(cccd, 'string')
            && !Helper.VariableTypeChecker(cccd, 'number')) {
            return callback (2, 'id_hoc_vien_khong_hop_le', 400, 'id học viên không đúng', null)
        }

        if (!hocVienData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.cccd = cccd;
        console.log('this is cccd: ', cccd)
        queryObj.updatedAt = new Date();
        queryObj = hocVienData

        HocVien.findOne({where: where}).then(hocvien => {
            "use strict"
            if(hocvien) {
                HocVien.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, cccd)
                }).catch(function (error) {
                    "use strict"
                    return callback(2, 'cập_nhật_học_viên_thất_bại', 400, error, null)
                })
            } else {
                return callback(2, 'học_viên_không_hợp_lệ', 400, null, null);
            }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_hocvien_fail', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'update_hocvien_fail', 400, error);
    }
}

export function DeleteHocVien(cccd, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(cccd, 'string') &&
            !Helper.VariableTypeChecker(cccd, 'number')) {
            return callback(2, 'ivalid_hocvien_id', 400, 'id of hoc vien is incorrect', null);
        }

        where = {cccd: cccd};
        HocVien.findOne({where:where}).then(hocvien => {
            "use strict";
            HocVien.destroy({where:where}).then(result => {
                return callback(null, null, 200, null);
            }).catch(function (error) {
                return callback(2, 'remove_hocvien_failed', 420, error);
            })
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_hocvien_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_hocvien_failed', 400, error);
    }
}


