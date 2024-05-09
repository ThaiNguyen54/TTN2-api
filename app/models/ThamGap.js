import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";
import NguoiThan from "./NguoiThan.js";

let ThamGap = MySQLSequelize.define('ThamGap', {
    id: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    MaHocVien: {
        type: Sequelize.STRING(255),
        allowNull: false,
        references: {
            model: HocVien,
            key: 'MaHocVien'
        }
    },
    idNguoiThan: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
        references: {
            model: NguoiThan,
            key: 'id'
        }
    },
    NgayThamGap: {
        type: Sequelize.DATE,
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
    tableName: 'ThamGap'
})

export default ThamGap