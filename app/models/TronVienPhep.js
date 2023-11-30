import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";
import HocVien_CNTuNguyen from "./HocVien_CNTuNguyen.js";
import HocVien_CNBatBuoc from "./HocVien_CNBatBuoc.js";

let TronVienPhep = MySQLSequelize.define('TronVienPhep', {
    id: {
        type: Sequelize.BIGINT(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cccd: {
        type: Sequelize.STRING(255),
        references: {
            model: HocVien,
            key: 'cccd'
        }
    },
    NgayTron: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    SoThongBao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayRaThongBao: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    NgayCatGiam: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    id_dot_cntn: {
        type: Sequelize.BIGINT(10),
        default: null,
        references: {
            model: HocVien_CNTuNguyen,
            key: 'id'
        }
    },
    id_dot_cnbb: {
        type: Sequelize.BIGINT(10),
        default: null,
        references: {
            model: HocVien_CNBatBuoc,
            key: 'id'
        }
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
    tableName: 'TronVienPhep'
})

export default TronVienPhep