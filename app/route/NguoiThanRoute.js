// Third party components
import express from 'express';

// Our components
import * as NguoiThanController from '../controller/NguoiThanController.js'

const router = express.Router()

router.post('/ttn2/v1/nguoithan', NguoiThanController.AddNguoiThan);
router.post('/ttn2/v1/many/nguoithan', NguoiThanController.AddMultipleNguoiThan);
router.get('/ttn2/v1/nguoithan', NguoiThanController.GetAllNguoiThan);
router.put('/ttn2/v1/nguoithan/:id', NguoiThanController.UpdateNguoiThan);
router.delete('/ttn2/v1/nguoithan/:id', NguoiThanController.DeleteNguoiThan);
export default router