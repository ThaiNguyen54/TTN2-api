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
        if ( !Helper.VariableTypeChecker(data.MaHocVien, 'string')) {
            return callback(2, 'invalid_MaHocVien', 400, 'MaHocVien is not a string', null);
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
              SELECT 
                    HV_CNBatBuoc.*,
                    HocVien.Ho,
                    HocVien.Ten,
                    DATE_FORMAT(HV_CNBatBuoc.createdAt, "%Y-%m-%d") AS createdAt,
                    DATE_FORMAT(HV_CNBatBuoc.NgayCoKetQuaNghien, "%Y-%m-%d") AS NgayCoKetQuaNghien,
                    DATE_FORMAT(HV_CNBatBuoc.NgayHoanThanhXacDinhTinhTrangNghien, "%Y-%m-%d") AS NgayHoanThanhXacDinhTinhTrangNghien,
                    DATE_FORMAT(HV_CNBatBuoc.NgayKyQuyetDinhTamGiu, "%Y-%m-%d") AS NgayKyQuyetDinhTamGiu,
                    DATE_FORMAT(HV_CNBatBuoc.NgayKyQuyetDinh, "%Y-%m-%d") AS NgayKyQuyetDinh,
                    DATE_FORMAT(HV_CNBatBuoc.NgayGiaoTaiSan, "%Y-%m-%d") AS NgayGiaoTaiSan,
                    DATE_FORMAT(HV_CNBatBuoc.NgayHop, "%Y-%m-%d") AS NgayHop,
                    DATE_FORMAT(HV_CNBatBuoc.NgayDiLy, "%Y-%m-%d") AS NgayDiLy,
                    DATE_FORMAT(HV_CNBatBuoc.NgayNhapLaiCatGiam, "%Y-%m-%d") AS NgayNhapLaiCatGiam,
                    DATE_FORMAT(HV_CNBatBuoc.NgayChuyenCoSo, "%Y-%m-%d") AS NgayChuyenCoSo,
                    DATE_FORMAT(HV_CNBatBuoc.NgayChuyenVien, "%Y-%m-%d") AS NgayChuyenVien,
                    DATE_FORMAT(HV_CNBatBuoc.NgayNhapLai, "%Y-%m-%d") AS NgayNhapLai
              FROM HV_CNBatBuoc
              INNER JOIN HocVien ON HV_CNBatBuoc.MaHocVien = HocVien.MaHocVien;`;

        let conn = sql.createConnection(DatabaseConfig.mysql)

        conn.connect(function (err) {
            if (err) throw err;
            // console.log('Connected')
            conn.query(queryString, function (error, result, fields) {
                if (err) {
                    return callback(2, 'get_all_CNBB_fail', 400, error, null);
                }
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