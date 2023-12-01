import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";

let KhuSinhHoat = MySQLSequelize.define('KhuSinhHoat', {
    id: {
        type: Sequelize.STRING(255),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    TenKhu: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
    tableName: 'KhuSinhHoat'
})

export default KhuSinhHoat