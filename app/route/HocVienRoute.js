// Third party components
import express from 'express';

// Our components
import * as HocVienController from '../controller/HocVienController.js';

const router = express.Router()

router.post('/ttn2/v1/hocvien', HocVienController.AddHocVien);
router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router


