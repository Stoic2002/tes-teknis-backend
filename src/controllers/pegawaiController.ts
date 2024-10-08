import { createPegawaiService, getAllPegawaiService, getByIdPegawaiService, updatePegawaiService, deletePegawaiService } from '../services/pegawaiService';
import { NextFunction, Request, Response } from 'express';

export const createPegawaiController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const createPegawai = await createPegawaiService(req.body);
        res.status(201).json(createPegawai);

    }catch (error){
        next(error);
    }
}



export const getByIdPegawaiController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const getByIdPegawai = await getByIdPegawaiService(req.params.id);
        if (!getByIdPegawai) {
            return res.status(404).json({ error: 'unit kerja not found' });
          }
        res.json(getByIdPegawai);
    }catch (error){
        next(error);
    }
}

export const updatePegawaiController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedPegawai = await updatePegawaiService(req.params.id, req.body);
        if (!updatedPegawai) {
            return res.status(404).json({ error: 'Pegawai not found' });
        }
        res.json(updatedPegawai);
    } catch (error) {
        next(error);
    }
}

export const deletePegawaiController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedPegawai = await deletePegawaiService(req.params.id);
        if (!deletedPegawai) {
            return res.status(404).json({ error: 'Pegawai not found' });
        }
        res.json({ message: 'Pegawai successfully deleted', deletedPegawai });
    } catch (error) {
        next(error);
    }
}

export const getAllPegawaiController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Mengambil parameter dari query, dan memberikan nilai default jika tidak ada
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 6;
        const search = (req.query.search as string) || '';
        const unitKerja = (req.query.unitKerja as string) || '';

        // Memanggil service dengan pagination, pencarian, dan filtering
        const getAllPegawai = await getAllPegawaiService(page, pageSize, search, unitKerja);

        res.status(200).json(getAllPegawai);
    } catch (error) {
        next(error);
    }
}


