// Third party components
import express from 'express';

// Our components
import * as MoiQuanHeController from '../controller/MoiQuanHeController.js'

const router = express.Router()

router.post('/ttn2/v1/moiquanhe', MoiQuanHeController.AddMoiQuanHe);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router