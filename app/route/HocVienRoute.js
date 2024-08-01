// Third party components
import express from 'express';

// Our components
import * as HocVienController from '../controller/HocVienController.js';

const router = express.Router()

router.post('/ttn2/v1/auth/hocvien', HocVienController.AddHocVien);
router.get('/ttn2/v1/auth/hocvien', HocVienController.GetAllHocVien);
router.get('/ttn2/v1/auth/count-cn/hocvien', HocVienController.FindAllAndContCNHocVien);
router.put('/ttn2/v1/auth/hocvien/:cccd', HocVienController.UpdateHocVien);
router.delete('/ttn2/v1/auth/hocvien/:MaHocVien', HocVienController.DeleteHocVien);
export default router