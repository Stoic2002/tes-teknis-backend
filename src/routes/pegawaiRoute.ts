import express from 'express';
import { createPegawaiController, getAllPegawaiController, getByIdPegawaiController, updatePegawaiController, deletePegawaiController } from '../controllers/pegawaiController'
import {authMiddleware} from "../middlewares/auth";
import { doubleCsrfProtection } from "../middlewares/csrfMiddleware"

const router = express.Router();

router.post('/pegawai',doubleCsrfProtection, authMiddleware, createPegawaiController);
router.get('/pegawai',authMiddleware, getAllPegawaiController);
router.get('/pegawai/:id',authMiddleware, getByIdPegawaiController);
router.put('/pegawai/:id',doubleCsrfProtection, authMiddleware, updatePegawaiController);
router.delete('/pegawai/:id',doubleCsrfProtection, authMiddleware,  deletePegawaiController);

export default router;