// Third party components
import express from 'express';

// Our components
import * as HocVien_CNBatBuocController from "../controller/HocVien_CNBatBuocController.js";

const router = express.Router()

router.post('/ttn2/v1/cnbb', HocVien_CNBatBuocController.AddHocVien_CNBB);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router