// Third party components
import express from 'express';

// Our components
import * as KhuSinhHoatController from '../controller/KhuSinhHoatController.js';

const router = express.Router()

router.post('/ttn2/v1/khusinhhoat', KhuSinhHoatController.AddKhuSinhHoat);
// router.get('/ttn2/v1/khusinhhoat', HocVienController.GetAllHocVien);
export default router