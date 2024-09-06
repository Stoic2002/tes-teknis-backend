import express from 'express';
import { createPegawaiController, getAllPegawaiController, getByIdPegawaiController, updatePegawaiController, deletePegawaiController } from '../controllers/pegawaiController'
import auth from "../middlewares/auth";

const router = express.Router();

router.post('/pegawai', auth, createPegawaiController);
router.get('/pegawai',auth, getAllPegawaiController);
router.get('/pegawai/:id', auth, getByIdPegawaiController);
router.put('/pegawai/:id', auth, updatePegawaiController);
router.delete('/pegawai/:id', auth,  deletePegawaiController);

export default router;