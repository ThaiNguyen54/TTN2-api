// Third party components
import express from 'express';

// Our components
import * as NguoiThanController from '../controller/NguoiThanController.js'

const router = express.Router()

router.post('/ttn2/v1/nguoithan', NguoiThanController.AddNguoiThan);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router