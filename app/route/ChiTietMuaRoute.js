// Third party components
import express from 'express';

// Our components
import * as ChiTietMuaController from '../controller/ChiTietMuaController.js';

const router = express.Router()

router.post('/ttn2/v1/chitietmua', ChiTietMuaController.AddChiTietMua);
router.get('/ttn2/v1/chitietmua', ChiTietMuaController.GetAllChiTietMua);
router.put('/ttn2/v1/chitietmua/:id', ChiTietMuaController.UpdateChiTietMua);
router.delete('/ttn2/v1/chitietmua/:id', ChiTietMuaController.DeleteChiTietMua);
export default router