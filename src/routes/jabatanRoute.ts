import express from 'express';
import { createJabatanController, getAllJabatanController, getByIdJabatanController, updateJabatanController, deleteJabatanController } from '../controllers/jabatanController'
import auth from "../middlewares/auth";

const router = express.Router();

router.post('/jabatan', auth,  createJabatanController);
router.get('/jabatan', auth, getAllJabatanController);
router.get('/jabatan/:id', auth, getByIdJabatanController);
router.put('/jabatan/:id', auth, updateJabatanController);
router.delete('/jabatan/:id', auth, deleteJabatanController);

export default router;