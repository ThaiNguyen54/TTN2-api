// Third party components
import express from 'express';

// Our components
import * as HocVien_CNTuNguyenController from "../controller/HocVien_CNTuNguyenController.js";

const router = express.Router()

router.post('/ttn2/v1/auth/cntn', HocVien_CNTuNguyenController.AddHocVien_CNTN);
router.get('/ttn2/v1/auth/cntn', HocVien_CNTuNguyenController.GeAllCNTN);
router.put('/ttn2/v1/auth/cntn/:id', HocVien_CNTuNguyenController.UpdateCNTN);
router.delete('/ttn2/v1/auth/cntn/:id', HocVien_CNTuNguyenController.DeleteCNTN);
export default router