// Third party components
import express from 'express';

// Our components
import * as KyLuatController from '../controller/KyLuatController.js'

const router = express.Router()

router.post('/ttn2/v1/kyluat', KyLuatController.AddKyLuat);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router