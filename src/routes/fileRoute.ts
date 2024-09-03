import { Router } from 'express';
import {upload} from '../services/fileService';
import { uploadFile, delFile } from '../controllers/fileController';

const router = Router();

router.put('/upload', upload.single('fotoPath'), uploadFile);
router.post('/delete', delFile);

export default router;
