// Third party components
import express from 'express';

// Our components
import * as BanGiaoController from "../controller/BanGiaoController.js";

const router = express.Router()

router.post('/ttn2/v1/bangiao', BanGiaoController.AddHocVien);
// router.get('/ttn2/v1/hocvien', HocVienController.GetAllHocVien);
export default router