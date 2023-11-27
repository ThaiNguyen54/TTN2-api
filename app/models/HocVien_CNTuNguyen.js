import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";

let HocVien_CNTuNguyen = MySQLSequelize.define('HV_CNTuNguyen', {
    cccd: {
        type: Sequelize.STRING(255),
        references: {
            model: HocVien,
            key: 'cccd'
        }
    },
    TuNguyenDongPhi: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TuNguyenTaiCongDong: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    SoHopDong: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NguoiGiamHo: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThoiHanHopDong: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayThanLyHopDong: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    SoGiayHoanThanh: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    CacGiaiDoanCaiNghien: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayBatDauCaiNghien: {
        type: Sequelize.DATE,
        allowNull: true,
    }
}, {
    paranoid: false,
    freezeTableName: true,
    updatedAt: false,
    createdAt: false,
    tableName: 'HV_CNTuNguyen'
})

export default HocVien_CNTuNguyen;