// Third-party components
import sql from 'mysql'

// Our components
import * as Helper from '../utils/Helper.js'
import HocVien from "../models/HocVien.js";
import DatabaseConfig from '../config/Database.js'
import { v2 as cloudinary } from 'cloudinary'
import CloudinaryConfig from "../config/Cloudinary.js";
import {DELETED} from "../utils/Constants.js";

cloudinary.config(CloudinaryConfig)

export async function AddHocVien(data, callback) {
    try {
        if (!Helper.VariableTypeChecker(data.MaHocVien, 'string')) {
            return callback(2, 'invalid_MaHocVien', 400, 'MaHocVien is not a string', null);
        }

        if (data.HinhAnh !== '' && data.HinhAnh !== null && data.HinhAnh !== undefined) {
            const res = await cloudinary.uploader.upload(data.HinhAnh, {
                resource_type: 'auto',
                folder: 'ttn2'
            })
            data.HinhAnh = res.secure_url
       }
        data.createdBy = data.AdminId;

        HocVien.create(data).then(hocvien => {
            "use strict";
            return callback(null, null, 200, null, hocvien);
        }).catch(function (error) {
            "use-strict";
            return callback(2, 'add_hoc_vien_fail', 400, error, null);
        })
    } catch (error) {
        console.log(error)
        return callback(2, 'add_hoc_vien_fail', 400, error, null);
    }
}

export function GetAll (callback) {
    let where = {}
    where = {deleted: DELETED.NO}
    try {
        HocVien.findAndCountAll({
            attributes: {
                exclude: ['TenDayDu', 'createdBy', 'updatedAt', 'updatedBy'],
            },
            where: where
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
             COUNT(HV_CNTuNguyen.MaHocVien) AS Count_CNTuNguyen,
             COUNT(HV_CNBatBuoc.MaHocVien) AS Count_CNBatBuoc,
             DATE_FORMAT(HocVien.NgayCapCCCD, "%Y-%m-%d") AS NgayCapCCCD,
             DATE_FORMAT(HocVien.NgaySinh, "%Y-%m-%d") AS NgaySinh,
             DATE_FORMAT(HocVien.createdAt, "%Y-%m-%d") AS createdAt
      FROM HocVien
      LEFT JOIN HV_CNTuNguyen ON HocVien.MaHocVien = HV_CNTuNguyen.MaHocVien
      LEFT JOIN HV_CNBatBuoc ON HocVien.MaHocVien = HV_CNBatBuoc.MaHocVien
      WHERE HocVien.deleted = 0
      GROUP BY HocVien.MaHocVien;
    `;
        let conn = sql.createConnection(DatabaseConfig.mysql)

        conn.connect(function (err) {
            if (err) throw err;
            // console.log('Connected')
            conn.query(queryString, async function (error, result, fields) {
                if (err) {
                    return callback(2, 'get_all_and_count_fail', 400, error, null);
                }

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

export async function UpdateHocVien(MaHocVien, hocVienData, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(MaHocVien, 'string')
            && !Helper.VariableTypeChecker(MaHocVien, 'number')) {
            return callback(2, 'id_hoc_vien_khong_hop_le', 400, 'id học viên không đúng', null)
        }

        if (!hocVienData) {
            return callback(2, 'dữ liệu truyền vào không đúng', 400, null)
        }

        where.MaHocVien = MaHocVien;
        queryObj.updatedAt = new Date();
        queryObj = hocVienData

        if (hocVienData.HinhAnh !== null) {
            const res = await cloudinary.uploader.upload(hocVienData.HinhAnh, {
                resource_type: 'auto',
                folder: 'ttn2'
            })
            queryObj.HinhAnh = res.secure_url
        }

        HocVien.findOne({where: where}).then(hocvien => {
            "use strict"
            if(hocvien) {
                HocVien.update(
                    queryObj,
                    {where:where}
                ).then(result => {
                    console.log(result)
                    return callback(null, null, 200, null, MaHocVien)
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

export function DeleteHocVien(MaHocVien, callback) {
    try {
        let queryObj = {};
        let where = {};

        if (!Helper.VariableTypeChecker(MaHocVien, 'string') &&
            !Helper.VariableTypeChecker(MaHocVien, 'number')) {
            return callback(2, 'ivalid_hocvien_id', 400, 'id of hoc vien is incorrect', null);
        }

        where = {MaHocVien: MaHocVien};
        queryObj = {deleted: DELETED.YES};

        HocVien.findOne({where:where}).then(hocvien => {
            "use strict";
            HocVien.destroy({where: where}).then(result => {
                return callback(null, null, 200, null)
            }).catch(function (error) {
                "use strict"
                return callback(2, 'remove_failed', 420, error);
            })
            // if (hocvien && hocvien.deleted === DELETED.YES) {
            //     HocVien.destroy({where:where}).then(result => {
            //         return callback(null, null, 200, null);
            //     }).catch(function (error) {
            //         return callback(2, 'remove_hocvien_failed', 420, error);
            //     })
            // } else {
            //     hocvien.update(queryObj, {where:where}).then(result => {
            //         "use strict";
            //         return callback(null, null, 200, null);
            //     }).catch(function (error) {
            //        return callback(1, 'update_hocvien_fail', 420, error);
            //     })
            // }
        }).catch(function (error) {
            "use strict";
            return callback(2, 'find_one_hocvien_failed', 400, error, null);
        });
    } catch (error) {
        return callback(2, 'delete_hocvien_failed', 400, error);
    }
}


