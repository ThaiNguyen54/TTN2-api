import MySQLSequelize from "../utils/Sequelize.js";
import Sequelize from "sequelize";
import HocVien from "./HocVien.js";
let HocVien_CNBatBuoc = MySQLSequelize.define('HV_CNBatBuoc', {
    id: {
        type: Sequelize.STRING(255),
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
        type: Sequelize.STRING(255),
        allowNull: true
    } ,
    SoQuyetDinhTamGiu: {
        type: Sequelize.STRING(255),
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
        type: Sequelize.STRING(255),
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
        type: Sequelize.STRING(255),
        allowNull: true
    },
    SoLanCai: {
        type: Sequelize.STRING(255),
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
        type: Sequelize.STRING(255),
        allowNull: true
    },
    HinhThucHop: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThamPhanPhienHop: {
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
        type: Sequelize.STRING(255),
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
    CoQuanNhan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThoiGianDiLy: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThoiGianGiaHanDiLy: {
        type: Sequelize.STRING(255),
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
    NgayChuyenCoSo: {
        type: Sequelize.DATE,
        allowNull: true
    },
    CanBoBanGiao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    NoiChuyenVien: {
        type: Sequelize.STRING(255),
        allowNull: true
    } ,
    NgayChuyenVien: {
        type: Sequelize.DATE,
        allowNull: true
    } ,
    NgayNhapLai: {
        type: Sequelize.DATE,
        allowNull: true
    } ,
    ThongTinLienHeGiaDinh: {
        type: Sequelize.STRING(255),
        allowNull: true
    } ,
    GhiChu: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    createdAt: {
        type: Sequelize.DATEONLY,
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
    tableName: 'HV_CNBatBuoc'
})

export default HocVien_CNBatBuoc