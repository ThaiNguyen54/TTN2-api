// Third party components
import express from 'express';

// Our components
import * as NapTienController from '../controller/NapTienController.js';

const router = express.Router()

router.post('/ttn2/v1/naptien', NapTienController.AddNapTien);
router.get('/ttn2/v1/naptien', NapTienController.GetAllNapTien);
router.put('/ttn2/v1/naptien/:id', NapTienController.UpdateNapTien);
router.delete('/ttn2/v1/naptien/:id', NapTienController.DeleteNapTien);
export default router
