import express from 'express';
import { createUnitKerjaController, getAllUnitKerjaController, getByIdUnitKerjaController, updateUnitKerjaController, deleteUnitKerjaController } from '../controllers/unitKerjaController'
import {authMiddleware} from "../middlewares/auth";
import { doubleCsrfProtection } from "../middlewares/csrfMiddleware";

const router = express.Router();

router.post('/unit-kerja', doubleCsrfProtection, authMiddleware,  createUnitKerjaController);
router.get('/unit-kerja', authMiddleware, getAllUnitKerjaController);
router.get('/unit-kerja/:id', authMiddleware,  getByIdUnitKerjaController);
router.put('/unit-kerja/:id',doubleCsrfProtection, authMiddleware,  updateUnitKerjaController);
router.delete('/unit-kerja/:id',doubleCsrfProtection, authMiddleware,  deleteUnitKerjaController);

export default router;