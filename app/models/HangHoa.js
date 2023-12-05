import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";

let HangHoa = MySQLSequelize.define('HangHoa', {
    id: {
        type: Sequelize.BIGINT(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    TenHangHoa: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    DonGia: {
        type: Sequelize.BIGINT(10),
        allowNull: false
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
    tableName: 'HangHoa'
})

export default HangHoa