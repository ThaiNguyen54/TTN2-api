import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";

let KhuSinhHoat = MySQLSequelize.define('KhuSinhHoat', {
    id: {
        type: Sequelize.BIGINT(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    TenKhu: {
        type: Sequelize.STRING(255),
        allowNull: false,
    }
}, {
    paranoid: false,
    freezeTableName: true,
    updatedAt: false,
    createdAt: false,
    tableName: 'KhuSinhHoat'
})

export default KhuSinhHoat