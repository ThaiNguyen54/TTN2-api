import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";

let NguoiThan = MySQLSequelize.define('NguoiThan', {
    id: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cccdHocVien: {
        type: Sequelize.STRING(255),
        allowNull: false,
        references: {
            model: HocVien,
            key: 'cccd'
        }
    },
    MoiQuanHe: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    HoTenNguoiThan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgaySinh: {
        type: Sequelize.DATE,
        allowNull: true
    },
    NoiO: {
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
    tableName: 'NguoiThan'
})

export default NguoiThan