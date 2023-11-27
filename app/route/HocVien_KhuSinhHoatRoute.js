// Third party components
import express from 'express';

// Our components
import * as HocVien_KhuSinhHoatController from "../controller/HocVien_KhuSinhHoatController.js";

const router = express.Router()

router.post('/ttn2/v1/hocvien_khusinhhoat', HocVien_KhuSinhHoatController.AddHocVien_KhuSinhHoat);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router