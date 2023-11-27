// Third party components
import express from 'express';

// Our components
import * as HocVien_CNTuNguyenController from "../controller/HocVien_CNTuNguyenController.js";

const router = express.Router()

router.post('/ttn2/v1/cntn', HocVien_CNTuNguyenController.AddHocVien_CNTN);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router