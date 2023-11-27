import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";
import HocVien_CNTuNguyen from "./HocVien_CNTuNguyen.js";
import HocVien_CNBatBuoc from "./HocVien_CNBatBuoc.js";

let KhenThuong = MySQLSequelize.define('KhenThuong', {
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
    SoQuyetDinhKhenThuong: {
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    NgayRaQuyetDinh: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    HinhThucKhenThuong: {
        type: Sequelize.STRING(255),
        primaryKey: true
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
    tableName: 'KhenThuong'
});

export default KhenThuong;