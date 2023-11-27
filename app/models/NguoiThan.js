import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";

let NguoiThan = MySQLSequelize.define('NguoiThan', {
    HoTen: {
        type: Sequelize.STRING(255),
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