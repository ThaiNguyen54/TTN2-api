import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";

let HocVien_CNTuNguyen = MySQLSequelize.define('HV_CNTuNguyen', {
    id: {
        type: Sequelize.STRING(255),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    MaHocVien: {
        type: Sequelize.STRING(255),
        references: {
            model: HocVien,
            key: 'MaHocVien'
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
    NgayThanhLyHopDong: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    NgayCapGiayHoanThanh: {
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
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true,
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true
    },
    createdBy: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
    },
    updatedBy: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    paranoid: false,
    freezeTableName: true,
    updatedAt: false,
    createdAt: false,
    tableName: 'HV_CNTuNguyen'
})

export default HocVien_CNTuNguyen;