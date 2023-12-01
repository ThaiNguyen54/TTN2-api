import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";
import KhuSinhHoat from "./KhuSinhHoat.js";

let HocVien_KhuSinhHoat = MySQLSequelize.define('HocVien_KhuSinhHoat', {
    id: {
        type: Sequelize.BIGINT(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_khu_sh: {
        type: Sequelize.STRING(255),
        references: {
            model: KhuSinhHoat,
            key: 'id'
        }

    },
    cccd: {
        type: Sequelize.STRING(255),
        references: {
            model: HocVien,
            key: 'cccd'
        }
    },
    NgayBatDauO: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    NgayChuyenKhu: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    TrangThai: {
        type: Sequelize.STRING(255),
        allowNull: true
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
    tableName: 'HocVien_KhuSinhHoat'
})

export default HocVien_KhuSinhHoat