show databases;
create database TTN2;
use TTN2;
show tables;

create table HocVien (
    cccd varchar(255) primary key ,
    NgayCapCCCD date,
    NoiCapCCCD varchar(255),
    SoDu varchar(255),
    Ho varchar(255),
    Ten varchar(255),
    TenDayDu varchar(255),
    Tuoi int,
    GioiTinh varchar(255),
    NgaySinh date,
    DCThuongTru varchar(255),
    DanToc varchar(255),
    Tinh varchar(255),
    Huyen varchar(255),
    DonVi varchar(255),
    TinhTrangHN varchar(255),
    TienAn varchar(255),
    TienSu varchar(255),
    TenKhac varchar(255),
    TrinhDo varchar(255),
    ViecLam varchar(255),
    TonGiao varchar(255),
    HinhAnh varchar(1000),
    NamSudung int,
    HinhThucSuDung varchar(255),
    TinhTrangNghien varchar(255),
    LoaiMaTuySD varchar(255),
    SoLanSD varchar(255),
    LieuSD varchar(255),
    SoLanCai int,
    DienThoai varchar(255),
    DieuTriARV varchar(255),
    CoQuanBanGiao varchar(255),
    ThanhPhanGiaDinh varchar(255),
    CoQuanXacDinhTinhTrangNghien varchar(255),
    TuoiLanDauSuDung int,
    TuoiLanDauTiemChich int,
    TongThoiGianSuDung int,
    SoNgayLanSuDung int,
    NguyenNhanTaiNghien varchar(255),
    ThanhPhanBanThan varchar(255),
    TinhTrangViecLam varchar(255),
    TrongNhapLai varchar(255),
    NhapMoi varchar(255),
    GhiChu varchar(255)
);


create table HV_CNTuNguyen (
    id int auto_increment,
    cccd varchar(255),
    TuNguyenDongPhi varchar(255),
    TuNguyenTaiCongDong varchar(255),
    SoHopDong int,
    NguoiGiamHo varchar(255),
    ThoiHanHopDong varchar(255),
    NgayThanLyHopDong date,
    SoGiayHoanThanh int,
    CacGiaiDoanCaiNghien varchar(255),
    NgayBatDauCaiNghien date,
    constraint primary key (id, cccd)
);

create table HV_CNBatBuoc (
    id int auto_increment,
    cccd varchar(255),
    LyDoGiam varchar(255),
    ThoiGianChapHanh int,
    SoQuyetDinhTamGiu int,
    NgayKyQuyetDinhTamGiu date,
    NgayCoKetQuaNghien date,
    NgayHoanThanhXacDinhTinhTrangNghien date,
    KetQua varchar(255),
    SoQuyetDinhQuanLy int,
    NgayKyQuyetDinh varchar(255),
    TienAn varchar(255),
    ToiDanh varchar(255),
    ThoiHanTu int,
    TienSu varchar(255),
    NoiCaiNghien varchar(255),
    LoaiTaiSan varchar(255),
    TinhTrangTaiSan varchar(255),
    BanGiao varchar(255),
    NgayGiaoTaiSan date,
    NgayHop date,
    GioHop int,
    HinhThucHop varchar(255),
    ThuKyPhienHop varchar(255),
    Hoan varchar(255),
    KhieuNai varchar(255),
    TinhTrangXuLyDonVangMat varchar(255),
    ThoiHanQuyetDinh int,
    NoiChapHanhQuyetDinh varchar(255),
    CongVanDiLy varchar(255),
    NgayDiLy date,
    ThoiGianDiLy int,
    SoQuyetDinhDuaRaKhoiCoSo varchar(255),
    NgayNhapLaiCatGiam date,
    SoQuyetDinhToaAn varchar(255),
    constraint primary key (id, cccd)
);


create table KyLuat (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoQuyetDinhKyLuat varchar(255),
    NgayRaQuyetDinh date,
    ThoiHanKyLuat int,
    NgayViPham date,
    NgayHetHanKyLuat varchar(255),
    HinhThucKyLuat varchar(255),
    HanhViViPham varchar(255),
    id_dot_cntn int,
    id_dot_cnbb int
);

create table KhenThuong (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoQuyetDinhKhenThuong varchar(255),
    NgayRaQuyetDinh date,
    HinhThucKhenThuong varchar(255),
    id_dot_cntn int,
    id_dot_cnbb int
);

create table BanGiao (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoVanBanBanGiao varchar(255),
    NgayRaVanBan date,
    LyDoBanGiao varchar(255),
    CanBoBenNhan varchar(255),
    CoQuanNhan varchar(255),
    ThongTinLienLacBenNhan varchar(255),
    CanBoGiaiQuyet varchar(255),
    LanhDaoChucVu varchar(255),
    id_dot_cntn int,
    id_dot_cnbb int
);

create table TronVienPhep (
    id int auto_increment primary key ,
    cccd varchar(255),
    NgayTron date,
    SoThongBao varchar(255),
    NgayRaThongBao date,
    NgayCatGiam date,
    id_dot_cntn int,
    id_dot_cnbb int
);

create table KhuSinhHoat (
    id int auto_increment primary key ,
    TenKhu varchar(255)
);

create table HocVien_KhuSinhHoat (
    id int auto_increment primary key ,
    id_khu_sh int,
    cccd varchar(255),
    NgayBatDauO date,
    NgayChuyenKhu date,
    TrangThai varchar(255)
);

create table NguoiThan (
    id int auto_increment primary key ,
    HoTen varchar(255)
);

create table MoiQuanHe (
    id int auto_increment primary key ,
    id_nguoi_than int,
    cccd varchar(255),
    MoiQuanHe varchar(255)
);

-- add foreign keys
alter table HV_CNTuNguyen add foreign key (cccd) references HocVien(cccd);

alter table HV_CNBatBuoc add foreign key (cccd) references HocVien(cccd);

alter table KyLuat add foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table KyLuat add foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table KyLuat add foreign key (cccd) references HocVien(cccd);

alter table KhenThuong add foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table KhenThuong add foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table KhenThuong add foreign key (cccd) references HocVien(cccd);

alter table BanGiao add foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table BanGiao add foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table BanGiao add foreign key (cccd) references HocVien(cccd);

alter table TronVienPhep add foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table TronVienPhep add foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table TronVienPhep add foreign key (cccd) references HocVien(cccd);

alter table MoiQuanHe add foreign key (cccd) references HocVien(cccd);
alter table MoiQuanHe add foreign key (id_nguoi_than) references NguoiThan(id);

alter table HocVien_KhuSinhHoat add foreign key (cccd) references HocVien(cccd);
alter table HocVien_KhuSinhHoat add foreign key (id_khu_sh) references KhuSinhHoat(id);

-- create table test (
-- ngay date
-- );
-- drop table test;

-- -- upercase the letter Y
-- insert into test (ngay) values (STR_TO_DATE('07-11-1000', '%d-%m-%Y'));
