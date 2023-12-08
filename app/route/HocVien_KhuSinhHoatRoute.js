// Third party components
import express from 'express';

// Our components
import * as HocVien_KhuSinhHoatController from "../controller/HocVien_KhuSinhHoatController.js";

const router = express.Router()

router.post('/ttn2/v1/auth/hocvien_khusinhhoat', HocVien_KhuSinhHoatController.AddHocVien_KhuSinhHoat);
router.get('/ttn2/v1/auth/hocvien_khusinhhoat', HocVien_KhuSinhHoatController.GetAllHocVien_KhuSinhHoat);
router.put('/ttn2/v1/auth/hocvien_khusinhhoat/:id', HocVien_KhuSinhHoatController.UpdateHocVien_KhuSinhHoat);
router.delete('/ttn2/v1/auth/hocvien_khusinhhoat/:id', HocVien_KhuSinhHoatController.DeleteHocVien_KhuSinhHoat);


export default router