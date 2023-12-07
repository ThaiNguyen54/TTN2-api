// Third party components
import express from 'express';

// Our components
import * as AdminController from '../controller/AdminController.js'

const router = express.Router()

router.post('/ttn2/v1/admin/login', AdminController.Login);
export default router