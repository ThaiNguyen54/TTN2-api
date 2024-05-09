import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import NguoiThan from "./NguoiThan.js";
import HocVien from "./HocVien.js";

let MoiQuanHe = MySQLSequelize.define('MoiQuanHe', {
    id: {
        type: Sequelize.BIGINT(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_nguoi_than: {
        type: Sequelize.STRING(255),
        references: {
            model: NguoiThan,
            key: 'id'
        }
    },
    MaHocVien: {
        type: Sequelize.STRING(255),
        references: {
            model: HocVien,
            key: 'MaHocVien'
        }
    },
    MoiQuanHe: {
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
    tableName: 'MoiQuanHe'
})

export default MoiQuanHe