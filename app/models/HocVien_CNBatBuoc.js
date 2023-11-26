import MySQLSequelize from "../utils/Sequelize.js";
import Sequelize from "sequelize";
let HV_CNBatBuoc = MySQLSequelize.define('HV_CNBatBuoc', {
    cccd: {
        type: Sequelize.STRING(255),
    },
    LyDoGiam:{
        type: Sequelize.STRING(255),
        allowNull: true
    },
    ThoiGianChapHanh: {
        type: Sequelize.DATE,
        allowNull: true
    } ,
    SoQuyetDinhTamGiu ,
    NgayKyQuyetDinhTamGiu ,
    NgayCoKetQuaNghien ,
    NgayHoanThanhXacDinhTinhTrangNghien ,
    KetQua  ,
    SoQuyetDinhQuanLy ,
    NgayKyQuyetDinh ,
    TienAn  ,
    ToiDanh  ,
    ThoiHanTu ,
    TienSu  ,
    NoiCaiNghien  ,
    LoaiTaiSan  ,
    TinhTrangTaiSan  ,
    BanGiao  ,
    NgayGiaoTaiSan  ,
    NgayHop ,
    GioHop ,
    HinhThucHop  ,
    ThuKyPhienHop  ,
    Hoan  ,
    KhieuNai  ,
    TinhTrangXuLyDonVangMat  ,
    ThoiHanQuyetDinh ,
    NoiChapHanhQuyetDinh  ,
    CongVanDiLy  ,
    NgayDiLy ,
    ThoiGianDiLy ,
    SoQuyetDinhDuaRaKhoiCoSo  ,
    NgayNhapLaiCatGiam ,
    SoQuyetDinhToaAn  ,
})