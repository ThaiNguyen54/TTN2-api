show databases;
create database TTN2;
use TTN2;
show tables;

create table Admin (
    id int primary key auto_increment,
    username varchar(255),
    password varchar(255),
    role varchar(255)
);

create table HocVien (
    cccd varchar(255) primary key ,
    NgayCapCCCD date,
    NoiCapCCCD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoDu int,
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
    HinhAnh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci ,
    NamSudung int,
    HinhThucSuDung varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LoaiMaTuySD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoLanSD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LieuSD varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoLanCai int,
    DienThoai varchar(255),
    DieuTriARV varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LyDoGiam varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
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
    TronNhapLai varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NhapMoi varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    GhiChu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table HV_CNTuNguyen (
    id varchar(255),
    cccd varchar(255),
    TuNguyenDongPhi varchar(255)  character set utf8mb4 collate utf8mb4_unicode_ci,
    TuNguyenTaiCongDong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoHopDong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NguoiGiamHo varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiHanHopDong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayThanhLyHopDong date,
    NgayCapGiayHoanThanh date,
    SoGiayHoanThanh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CacGiaiDoanCaiNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayBatDauCaiNghien date,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    constraint primary key (id)
);

create table HV_CNBatBuoc (
    id varchar(255),
    cccd varchar(255),
    LyDoGiam varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiGianChapHanh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoQuyetDinhTamGiu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayKyQuyetDinhTamGiu date,
    NgayCoKetQuaNghien date,
    NgayHoanThanhXacDinhTinhTrangNghien date,
    KetQua varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoQuyetDinhQuanLy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayKyQuyetDinh date,
    TienAn varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ToiDanh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiHanTu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoLanCai varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TienSu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NoiCaiNghien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LoaiTaiSan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangTaiSan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    BanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayGiaoTaiSan date ,
    NgayHop date,
    GioHop varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    HinhThucHop varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThamPhanPhienHop varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThuKyPhienHop varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    Hoan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    KhieuNai varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    TinhTrangXuLyDonVangMat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiHanQuyetDinh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NoiChapHanhQuyetDinh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CongVanDiLy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayDiLy date,
    CoQuanNhan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiGianDiLy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThoiGianGiaHanDiLy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    SoQuyetDinhDuaRaKhoiCoSo varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayNhapLaiCatGiam date,
    SoQuyetDinhToaAn varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayChuyenCoSo date,
    CanBoBanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NoiChuyenVien varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayChuyenVien date,
    NgayNhapLai date,
    ThongTinLienHeGiaDinh varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    GhiChu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    constraint primary key (id)
);


create table KyLuat (
    id int auto_increment primary key,
    cccd varchar(255),
    SoQuyetDinhKyLuat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaQuyetDinh date,
    ThoiHanKyLuat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayViPham date,
    NgayHetHanKyLuat date,
    HinhThucKyLuat varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    HanhViViPham varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    id_dot_cntn varchar(255),
    id_dot_cnbb varchar(255),
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table KhenThuong (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoQuyetDinhKhenThuong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaQuyetDinh date,
    HinhThucKhenThuong varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    id_dot_cntn varchar(255),
    id_dot_cnbb varchar(255),
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table BanGiao (
    id int auto_increment primary key ,
    cccd varchar(255),
    SoVanBanBanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaVanBan date,
    NgayBanGiao date,
    LyDoBanGiao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CanBoBenNhan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CoQuanNhan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    ThongTinLienLacBenNhan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    CanBoGiaiQuyet varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    LanhDaoChucVu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    id_dot_cntn varchar(255),
    id_dot_cnbb varchar(255),
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table TronVienPhep (
    id int auto_increment primary key ,
    cccd varchar(255),
    NgayTron date,
    SoThongBao varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgayRaThongBao date,
    NgayCatGiam date,
    id_dot_cntn varchar(255),
    id_dot_cnbb varchar(255),
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table KhuSinhHoat (
    id int auto_increment primary key ,
    TenKhu varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table HocVien_KhuSinhHoat (
    id int auto_increment primary key ,
    id_khu_sh int,
    cccd varchar(255),
    NgayBatDauO date,
    NgayChuyenKhu date,
    TrangThai varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table NguoiThan (
    id int auto_increment primary key,
    cccdHocVien varchar(255),
    HoTenNguoiThan varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    NgaySinh date,
    NoiO varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    MoiQuanHe varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table ThamGap (
    id int auto_increment primary key,
    cccdHocVien varchar(255),
    idNguoiThan int,
    NgayThamGap date,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table HangHoa (
    id int auto_increment primary key,
    TenHangHoa varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    DonGia int,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
);

create table ChiTietMua (
    id int auto_increment primary key,
    cccd varchar(255),
    idHangHoa int,
    SoLuong int,
    ThanhTien int,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci

);

create table NapTien (
    id int auto_increment primary key,
    cccd varchar(255),
    SoTienNap int,
    createdAt date,
    createdBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci,
    updatedAt date,
    updatedBy varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci
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


alter table HocVien_KhuSinhHoat add constraint HocVien_KhuSinhHoat_HocVien foreign key (cccd) references HocVien(cccd);
alter table HocVien_KhuSinhHoat add constraint HocVien_KhuSinhHoat_KhuSinhHoat foreign key (id_khu_sh) references KhuSinhHoat(id);

alter table NguoiThan add constraint NguoiThan_HocVien foreign key (cccdHocVien) references HocVien(cccd);

alter table NapTien add constraint NapTien_HocVien foreign key (cccd) references HocVien(cccd);

alter table ChiTietMua add constraint ChiTietMua_HocVien foreign key (cccd) references HocVien(cccd);
alter table ChiTietMua add constraint ChiTietMua_HangHoa foreign key (idHangHoa) references HangHoa(id);

alter table ThamGap add constraint ThamGap_NguoiTham foreign key (idNguoiThan) references NguoiThan(id);
alter table ThamGap add constraint ThamGap_HocVien foreign key (cccdHocVien) references HocVien(cccd);


################ Trigger Update SoDu ################
DELIMITER //

CREATE TRIGGER updateSoDu
AFTER INSERT
ON NapTien FOR EACH ROW

BEGIN
    DECLARE currentSoDu INT;

    -- Get the current SoDu value for the corresponding cccd
    SELECT SoDu INTO currentSoDu
    FROM HocVien
    WHERE cccd = NEW.cccd;

    -- Update SoDu by adding the SoTienNap from the inserted record
    UPDATE HocVien
    SET SoDu = currentSoDu + NEW.SoTienNap
    WHERE cccd = NEW.cccd;
END //

DELIMITER ;
##########################################################

############# Trigger for Updating SoDu when buy somthing ######################
DELIMITER //

CREATE TRIGGER SubtractSoDuAfterPurchasing
AFTER INSERT
ON ChiTietMua FOR EACH ROW

BEGIN
    DECLARE currentSoDu INT;
    DECLARE donGiaHangHoa INT;
    DECLARE TongTien INT;

    -- Get the current SoDu value for the corresponding cccd
    SELECT SoDu INTO currentSoDu
    FROM HocVien
    WHERE cccd = NEW.cccd;

    -- Get the unit price of each good for the corresponding idHangHoa
    SELECT HangHoa.DonGia INTO donGiaHangHoa
    FROM HangHoa
    WHERE HangHoa.id = NEW.idHangHoa;

    SET TongTien = donGiaHangHoa * NEW.SoLuong;


    IF (currentSoDu - TongTien) < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Số tiền không đủ';
    ELSE
        -- Update SoDu by adding the SoTienNap from the inserted record
        UPDATE HocVien
        SET SoDu = currentSoDu - TongTien
        WHERE cccd = NEW.cccd;
    END IF;
END //

DELIMITER ;
###################################################################################

insert into NapTien (cccd, SoTienNap) value (1002, 1000000);
insert into HangHoa (TenHangHoa, DonGia) value ('Trứng', 2000);
insert into HangHoa (TenHangHoa, DonGia) value ('Sữa', 5000);

insert into ChiTietMua(cccd, idHangHoa, SoLuong) value (1002, 3, 4);

insert into Admin (username, password, role) value ('admin', '$2y$10$MMsUOL/txDHDa8e6CGzTVevYV6x0xwOt4E1370DS6j8Jzdm8xahfq', 'SUPER_ADMIN');

select * from Admin;

select * from HocVien;
select * from HangHoa;
select * from ChiTietMua;
# delete from HocVien;
