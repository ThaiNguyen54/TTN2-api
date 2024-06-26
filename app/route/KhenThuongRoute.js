// Third party components
import express from 'express';

// Our components
import * as KhenThuongController from "../controller/KhenThuongController.js";

const router = express.Router()

router.post('/ttn2/v1/auth/khenthuong', KhenThuongController.AddKhenThuong);
router.get('/ttn2/v1/auth/khenthuong', KhenThuongController.GetAllKhenThuong);
router.put('/ttn2/v1/auth/khenthuong', KhenThuongController.UpdateKhenThuong);
router.delete('/ttn2/v1/auth/khenthuong', KhenThuongController.DeleteKhenThuong);
export default router