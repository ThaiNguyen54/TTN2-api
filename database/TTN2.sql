show databases;
create database TTN2;
use TTN2;
show tables;

create table HocVien (
    cccd varchar(255) primary key ,
    NgayCapCCCD date,
    NoiCapCCCD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoDu varchar(255),
    Ho varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    Ten varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TenDayDu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    Tuoi int,
    GioiTinh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgaySinh date,
    DCThuongTru varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    DanToc varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    Tinh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    Huyen varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    DonVi varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangHN varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TienAn varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TienSu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TenKhac varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TrinhDo varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ViecLam varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TonGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    HinhAnh varchar(1000) ,
    NamSudung int,
    HinhThucSuDung varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LoaiMaTuySD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoLanSD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LieuSD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoLanCai int,
    DienThoai varchar(255),
    DieuTriARV varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CoQuanBanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThanhPhanGiaDinh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CoQuanXacDinhTinhTrangNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TuoiLanDauSuDung int,
    TuoiLanDauTiemChich int,
    TongThoiGianSuDung int,
    SoNgayLanSuDung int,
    NguyenNhanTaiNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThanhPhanBanThan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangViecLam varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TrongNhapLai varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NhapMoi varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    GhiChu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);



create table HV_CNTuNguyen (
    id int auto_increment,
    cccd varchar(255),
    TuNguyenDongPhi varchar(255)  character set utf8mb4 collate utf8mb4_unicode_ci,
    TuNguyenTaiCongDong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoHopDong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NguoiGiamHo varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiHanHopDong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayThanLyHopDong date,
    SoGiayHoanThanh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CacGiaiDoanCaiNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayBatDauCaiNghien date,
    constraint primary key (id, cccd)
);

create table HV_CNBatBuoc (
    id int auto_increment,
    cccd varchar(255),
    LyDoGiam varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiGianChapHanh int,
    SoQuyetDinhTamGiu int,
    NgayKyQuyetDinhTamGiu date,
    NgayCoKetQuaNghien date,
    NgayHoanThanhXacDinhTinhTrangNghien date,
    KetQua varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoQuyetDinhQuanLy int,
    NgayKyQuyetDinh date,
    TienAn varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ToiDanh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiHanTu int,
    TienSu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NoiCaiNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LoaiTaiSan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangTaiSan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    BanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayGiaoTaiSan date ,
    NgayHop date,
    GioHop int,
    HinhThucHop varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThuKyPhienHop varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    Hoan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    KhieuNai varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangXuLyDonVangMat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiHanQuyetDinh int,
    NoiChapHanhQuyetDinh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CongVanDiLy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayDiLy date,
    ThoiGianDiLy int,
    SoQuyetDinhDuaRaKhoiCoSo varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayNhapLaiCatGiam date,
    SoQuyetDinhToaAn varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    constraint primary key (id, cccd)
);


create table KyLuat (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoQuyetDinhKyLuat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaQuyetDinh date,
    ThoiHanKyLuat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayViPham date,
    NgayHetHanKyLuat date,
    HinhThucKyLuat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    HanhViViPham varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    id_dot_cntn int,
    id_dot_cnbb int
);

create table KhenThuong (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoQuyetDinhKhenThuong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaQuyetDinh date,
    HinhThucKhenThuong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    id_dot_cntn int,
    id_dot_cnbb int
);

create table BanGiao (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoVanBanBanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaVanBan date,
    LyDoBanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CanBoBenNhan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CoQuanNhan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThongTinLienLacBenNhan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CanBoGiaiQuyet varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LanhDaoChucVu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    id_dot_cntn int,
    id_dot_cnbb int
);

create table TronVienPhep (
    id int auto_increment primary key ,
    cccd varchar(255),
    NgayTron date,
    SoThongBao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaThongBao date,
    NgayCatGiam date,
    id_dot_cntn int,
    id_dot_cnbb int
);

create table KhuSinhHoat (
    id int auto_increment primary key ,
    TenKhu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table HocVien_KhuSinhHoat (
    id int auto_increment primary key ,
    id_khu_sh int,
    cccd varchar(255),
    NgayBatDauO date,
    NgayChuyenKhu date,
    TrangThai varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table NguoiThan (
    id int auto_increment primary key ,
    HoTen varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table MoiQuanHe (
    id int auto_increment primary key ,
    id_nguoi_than int,
    cccd varchar(255),
    MoiQuanHe varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

-- add foreign keys
alter table HV_CNTuNguyen add constraint HV_CNTuNguyen_cccd foreign key (cccd) references HocVien(cccd);

alter table HV_CNBatBuoc add constraint HV_CNBatBuoc_cccd foreign key (cccd) references HocVien(cccd);

alter table KyLuat add constraint KyLuat_HV_CNBatBuoc foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table KyLuat add constraint KyLuat_HV_CNTuNguyen foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table KyLuat add constraint KyLuat_HocVien foreign key (cccd) references HocVien(cccd);

alter table KhenThuong add constraint KhenThuong_HV_CNBatBuoc foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table KhenThuong add constraint KhenThuong_HV_CNTuNguyen foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table KhenThuong add constraint KhenThuong_HocVien foreign key (cccd) references HocVien(cccd);


alter table BanGiao add constraint BanGiao_HV_CNBatBuoc foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table BanGiao add constraint BanGiao_HV_CNTuNguyen foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table BanGiao add constraint BanGiao_HocVien foreign key(cccd) references HocVien(cccd);


alter table TronVienPhep add constraint TronVienPhep_HV_CNBatBuoc foreign key (id_dot_cnbb) references HV_CNBatBuoc(id);
alter table TronVienPhep add constraint TronVienPhep_HV_CNTuNguyen foreign key (id_dot_cntn) references HV_CNTuNguyen(id);
alter table TronVienPhep add constraint TronVienPhep_HocVien foreign key (cccd) references HocVien(cccd);


alter table MoiQuanHe add constraint MoiQuanHe_HocVien foreign key (cccd) references HocVien(cccd);
alter table MoiQuanHe add constraint MoiQuanHe_NguoiThan foreign key (id_nguoi_than) references NguoiThan(id);

alter table HocVien_KhuSinhHoat add constraint HocVien_KhuSinhHoat_HocVien foreign key (cccd) references HocVien(cccd);
alter table HocVien_KhuSinhHoat add constraint HocVien_KhuSinhHoat_KhuSinhHoat foreign key (id_khu_sh) references KhuSinhHoat(id);

select * from KhuSinhHoat;
delete from HocVien;

# create table test (
# ngay date
# );
# drop table test;

-- -- upercase the letter Y
# insert into test (ngay) values (STR_TO_DATE('07-11-1000', '%d-%m-%Y'));
