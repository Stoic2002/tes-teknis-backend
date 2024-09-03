import express from 'express';
import { createUnitKerjaController, getAllUnitKerjaController, getByIdUnitKerjaController, updateUnitKerjaController, deleteUnitKerjaController } from '../controllers/unitKerjaController'
import auth from "../middlewares/auth";

const router = express.Router();

router.post('/unit-kerja', auth,  createUnitKerjaController);
router.get('/unit-kerja', auth, getAllUnitKerjaController);
router.get('/unit-kerja/:id', auth,  getByIdUnitKerjaController);
router.put('/unit-kerja/:id', auth,  updateUnitKerjaController);
router.delete('/unit-kerja/:id', auth,  deleteUnitKerjaController);

export default router;