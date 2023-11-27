import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import NguoiThan from "./NguoiThan.js";
import HocVien from "./HocVien.js";

let MoiQuanHe = MySQLSequelize.define('MoiQuanHe', {
    id_nguoi_than: {
        type: Sequelize.BIGINT(10),
        references: {
            model: NguoiThan,
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
    MoiQuanHe: {
        type: Sequelize.STRING(255),
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