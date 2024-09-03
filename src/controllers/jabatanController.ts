import { createJabatanService, getAllJabatanService, getByIdJabatanService, updateJabatanService, deleteJabatanService } from '../services/jabatanService';
import { NextFunction, Request, Response } from 'express';

export const createJabatanController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const createJabatan = await createJabatanService(req.body);
        res.status(201).json(createJabatan);
    }catch (error){
        next(error);
    }
}

export const getAllJabatanController = async (req: Request,res : Response, next: NextFunction) => {
    try{
        const getAllJabatan = await getAllJabatanService();
        res.json(getAllJabatan);
    }catch (error){ 
        next(error);
    }
}

export const getByIdJabatanController = async (req: Request, res : Response, next: NextFunction) => {
    try{
        const getByIdJabatan = await getByIdJabatanService(req.params.id);
        if (!getByIdJabatan) {
            return res.status(404).json({ error: 'pegawai not found' });
          }
        res.json(getByIdJabatan);
    }catch (error){ 
        next(error);
    }
}

export const updateJabatanController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedJabatan = await updateJabatanService(req.params.id, req.body);
        if (!updatedJabatan) {
            return res.status(404).json({ error: 'Jabatan not found' });
        }
        res.json(updatedJabatan);
    } catch (error) {
        next(error);
    }
}

export const deleteJabatanController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedJabatan = await deleteJabatanService(req.params.id);
        if (!deletedJabatan) {
            return res.status(404).json({ error: 'Jabatan not found' });
        }
        res.json({ message: 'Jabatan successfully deleted', deletedJabatan });
    } catch (error) {
        next(error);
    }
}