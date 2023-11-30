import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";
import HocVien_CNTuNguyen from "./HocVien_CNTuNguyen.js";
import HocVien_CNBatBuoc from "./HocVien_CNBatBuoc.js";

let BanGiao = MySQLSequelize.define('BanGiao', {
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
    SoVanBanBanGiao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayRaVanBan: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    LyDoBanGiao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    CanBoBenNhan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    CoQuanNhan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThongTinLienLacBenNhan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    CanBoGiaiQuyet: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    LanhDaoChucVu: {
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
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Sequelize.literal('CURRENT_TIMESTAMP'),
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
    tableName: 'BanGiao'
})

export default BanGiao