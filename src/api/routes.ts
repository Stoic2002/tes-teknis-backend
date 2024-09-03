import express from 'express';
import authRoute from '../routes/authRoute';
import pegawaiRoute from '../routes/pegawaiRoute';
import jabatanRoute from '../routes/jabatanRoute';
import unitKerjaRoute from '../routes/unitKerjaRoute';
import fileRoute from '../routes/fileRoute';

const router = express.Router();

const versionApi = '/v1';

router.use(versionApi, authRoute);
router.use(versionApi,pegawaiRoute);
router.use(versionApi, jabatanRoute);
router.use(versionApi, unitKerjaRoute);
router.use(versionApi, fileRoute);

export default router;