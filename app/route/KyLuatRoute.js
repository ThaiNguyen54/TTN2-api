// Third party components
import express from 'express';

// Our components
import * as KyLuatController from '../controller/KyLuatController.js'

const router = express.Router()

router.post('/ttn2/v1/kyluat', KyLuatController.AddKyLuat);
router.get('/ttn2/v1/kyluat', KyLuatController.GetAllKyLuat);
router.put('/ttn2/v1/kyluat/:id', KyLuatController.UpdateKyLuat);
router.delete('/ttn2/v1/kyluat/:id', KyLuatController.DeleteKyLuat);
export default router