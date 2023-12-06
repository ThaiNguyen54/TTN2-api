import Sequelize from "sequelize";
import MySQLSequelize from "../utils/Sequelize.js";

let HocVien = MySQLSequelize.define('HocVien', {
    cccd: {
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    NgayCapCCCD: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    NoiCapCCCD: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    SoDu: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    } ,
    Ho: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    Ten: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TenDayDu: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    Tuoi: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    GioiTinh: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NgaySinh: {
        type: Sequelize.DATE,
        allowNull: true
    },
    DCThuongTru: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    DanToc: {
        type: Sequelize.STRING(255),
        allowNull: true
    } ,
    Tinh: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    DonVi: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    Huyen: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TinhTrangHN: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TienAn: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TienSu: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TenKhac: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TrinhDo: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ViecLam: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    TonGiao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    HinhAnh: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NamSudung: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    HinhThucSuDung: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    TinhTrangNghien: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    LoaiMaTuySD: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    SoLanSD: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    LieuSD: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    SoLanCai: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    DienThoai: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    DieuTriARV: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    LyDoGiam: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    CoQuanBanGiao: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    ThanhPhanGiaDinh: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    CoQuanXacDinhTinhTrangNghien: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    TuoiLanDauSuDung: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    TuoiLanDauTiemChich: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    TongThoiGianSuDung: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    SoNgayLanSuDung: {
        type: Sequelize.BIGINT(10),
        allowNull: true
    },
    NguyenNhanTaiNghien: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    ThanhPhanBanThan: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    TinhTrangViecLam: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    TronNhapLai: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    NhapMoi: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    GhiChu: {
        type: Sequelize.STRING(1000),
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
    tableName: 'HocVien'
});

export default HocVien