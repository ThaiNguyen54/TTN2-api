// Third party components
import express from 'express';

// Our components
import * as KhuSinhHoatController from '../controller/KhuSinhHoatController.js';

const router = express.Router()

router.post('/ttn2/v1/khusinhhoat', KhuSinhHoatController.AddKhuSinhHoat);
router.get('/ttn2/v1/khusinhhoat', KhuSinhHoatController.GetAllKhuSinhHoat);
router.put('/ttn2/v1/khusinhhoat/:id', KhuSinhHoatController.UpdateKhuSinhHoat);
router.delete('/ttn2/v1/khusinhhoat/:id', KhuSinhHoatController.DeleteKhuSinhHoat);
export default router