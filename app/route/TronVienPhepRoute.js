// Third party components
import express from 'express';

// Our components
import * as TronVienPhepController from "../controller/TronVienPhepController.js";

const router = express.Router()

router.post('/ttn2/v1/tronvienphep', TronVienPhepController.AddHocVien);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router