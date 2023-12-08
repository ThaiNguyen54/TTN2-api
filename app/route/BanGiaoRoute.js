// Third party components
import express from 'express';

// Our components
import * as BanGiaoController from "../controller/BanGiaoController.js";

const router = express.Router()

router.post('/ttn2/v1/auth/bangiao', BanGiaoController.AddHocVien);
router.get('/ttn2/v1/auth/bangiao', BanGiaoController.GetAllBanGiao);
router.put('/ttn2/v1/auth/bangiao/:id', BanGiaoController.UpdateBanGiao);
router.delete('/ttn2/v1/auth/bangiao/:id', BanGiaoController.DeleteBanGiao);
export default router