// Third party components
import express from 'express';

// Our components
import * as ThamGapController from '../controller/ThamGapController.js'

const router = express.Router()

router.post('/ttn2/v1/thamgap', ThamGapController.AddThamGap);
router.get('/ttn2/v1/thamgap', ThamGapController.GetAllThamGap);
router.put('/ttn2/v1/thamgap/:id', ThamGapController.UpdateThamGap);
router.delete('/ttn2/v1/thamgap/:id', ThamGapController.DeleteThamGap);
export default router