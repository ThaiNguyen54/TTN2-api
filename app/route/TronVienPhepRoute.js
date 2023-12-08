// Third party components
import express from 'express';

// Our components
import * as TronVienPhepController from "../controller/TronVienPhepController.js";

const router = express.Router()

router.post('/ttn2/v1/auth/tronvienphep', TronVienPhepController.AddTronVienPhep);
router.get('/ttn2/v1/auth/tronvienphep', TronVienPhepController.GetAllTronVienPhep);
router.put('/ttn2/v1/auth/tronvienphep/:id', TronVienPhepController.UpdateTronVienPhep);
router.delete('/ttn2/v1/auth/tronvienphep/:id', TronVienPhepController.DeleteTronVienPhep);
export default router