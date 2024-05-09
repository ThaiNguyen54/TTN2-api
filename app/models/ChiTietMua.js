import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";
import HocVien from "./HocVien.js";
import HangHoa from "./HangHoa.js";

let ChiTietMua = MySQLSequelize.define('ChiTietMua', {
    id: {
        type: Sequelize.BIGINT(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    MaHocVien: {
        type: Sequelize.STRING(255),
        allowNull: false,
        references: {
            model: HocVien,
            key: 'MaHocVien'
        }
    },
    idHangHoa: {
        type: Sequelize.BIGINT(10),
        references: {
            model: HangHoa,
            key: 'id'
        }
    },
    SoLuong: {
        type: Sequelize.BIGINT(10),
        allowNull: false
    },
    ThanhTien: {
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
    tableName: 'ChiTietMua'
})

export default ChiTietMua