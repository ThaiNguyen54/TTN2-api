import MySQLSequelize from "../utils/Sequelize.js";
import Sequelize from "sequelize";
import HocVien from "./HocVien.js";
let HocVien_CNBatBuoc = MySQLSequelize.define('HV_CNBatBuoc', {
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
    LyDoGiam:{
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThoiGianChapHanh: {
        type: Sequelize.DATE,
        allowNull: true
    } ,
    SoQuyetDinhTamGiu: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    NgayKyQuyetDinhTamGiu: {
        type: Sequelize.DATE,
        allowNull: true
    },
    NgayCoKetQuaNghien: {
        type: Sequelize.DATE,
        allowNull: true
    },
    NgayHoanThanhXacDinhTinhTrangNghien: {
        type: Sequelize.DATE,
        allowNull: true
    },
    KetQua: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    SoQuyetDinhQuanLy: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    NgayKyQuyetDinh: {
        type: Sequelize.DATE,
        allowNull: true
    },
    TienAn: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ToiDanh: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThoiHanTu: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    TienSu: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NoiCaiNghien: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    LoaiTaiSan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TinhTrangTaiSan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    BanGiao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayGiaoTaiSan: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    NgayHop: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    GioHop: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    HinhThucHop: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThuKyPhienHop: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    Hoan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    KhieuNai: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TinhTrangXuLyDonVangMat: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThoiHanQuyetDinh: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    NoiChapHanhQuyetDinh: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    CongVanDiLy: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayDiLy: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    ThoiGianDiLy: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    SoQuyetDinhDuaRaKhoiCoSo: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgayNhapLaiCatGiam: {
        type: Sequelize.DATE,
        allowNull: true
    },
    SoQuyetDinhToaAn: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
}, {
    paranoid: false,
    freezeTableName: true,
    updatedAt: false,
    createdAt: false,
    tableName: 'HV_CNBatBuoc'
})

export default HocVien_CNBatBuoc