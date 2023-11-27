import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";
import HocVien_CNTuNguyen from "./HocVien_CNTuNguyen.js";
import HocVien_CNBatBuoc from "./HocVien_CNBatBuoc.js";

let KyLuat = MySQLSequelize.define('KyLuat', {
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
    SoQuyetDinhKyLuat: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayRaQuyetDinh: {
        type: Sequelize.DATE,
        allowNull: true
    },
    ThoiHanKyLuat: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayViPham: {
        type: Sequelize.DATE,
        allowNull: true
    },
    NgayHetHanKyLuat: {
        type: Sequelize.DATE,
        allowNull: true
    },
    HinhThucKyLuat: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    HanhViViPham: {
        type: Sequelize.STRING(255),
        allowNull: true
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
    }
}, {
    paranoid: false,
    freezeTableName: true,
    updatedAt: false,
    createdAt: false,
    tableName: 'KyLuat'
})

export default KyLuat