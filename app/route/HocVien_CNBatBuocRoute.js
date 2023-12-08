// Third party components
import express from 'express';

// Our components
import * as HocVien_CNBatBuocController from "../controller/HocVien_CNBatBuocController.js";

const router = express.Router()

router.post('/ttn2/auth/v1/cnbb', HocVien_CNBatBuocController.AddHocVien_CNBB);
router.get('/ttn2/v1/auth/cnbb', HocVien_CNBatBuocController.GeAllCNBB);
router.put('/ttn2/v1/auth/cnbb/:id', HocVien_CNBatBuocController.UpdateCNBB);
router.delete('/ttn2/v1/auth/cnbb/:id', HocVien_CNBatBuocController.DeleteCNBB);
export default router