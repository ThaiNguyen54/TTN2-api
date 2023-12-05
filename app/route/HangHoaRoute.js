// Third party components
import express from 'express';

// Our components
import * as HangHoaController from '../controller/HangHoaController.js';

const router = express.Router()

router.post('/ttn2/v1/hanghoa', HangHoaController.AddHangHoa);
router.get('/ttn2/v1/hanghoa', HangHoaController.GetAllHangHoa);
router.put('/ttn2/v1/hanghoa/:id', HangHoaController.UpdateHangHoa);
router.delete('/ttn2/v1/hanghoa/:id', HangHoaController.DeleteHangHoa);
export default router