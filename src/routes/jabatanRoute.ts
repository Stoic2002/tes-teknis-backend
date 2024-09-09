import express from 'express';
import { createJabatanController, getAllJabatanController, getByIdJabatanController, updateJabatanController, deleteJabatanController } from '../controllers/jabatanController'
import {authMiddleware} from "../middlewares/auth";
import { doubleCsrfProtection } from "../middlewares/csrfMiddleware"

const router = express.Router();

router.post('/jabatan', doubleCsrfProtection, authMiddleware,  createJabatanController);
router.get('/jabatan', authMiddleware, getAllJabatanController);
router.get('/jabatan/:id', authMiddleware, getByIdJabatanController);
router.put('/jabatan/:id', doubleCsrfProtection, authMiddleware, updateJabatanController);
router.delete('/jabatan/:id', doubleCsrfProtection, authMiddleware, deleteJabatanController);

export default router;