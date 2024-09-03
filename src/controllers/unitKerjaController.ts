import { createUnitKerjaService, getAllUnitKerjaService, getByIdUnitKerjaService, updateUnitKerjaService, deleteUnitKerjaService } from '../services/unitKerjaService';
import { NextFunction, Request, Response } from 'express';

export const createUnitKerjaController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const createUnitKerja = await createUnitKerjaService(req.body);
        res.status(201).json(createUnitKerja);
    }catch (error){
        next(error);
    }
}

export const getAllUnitKerjaController = async (req: Request,res : Response, next: NextFunction) => {
    try{
        const getAllUnitKerja = await getAllUnitKerjaService();
        res.json(getAllUnitKerja);
    }catch (error){ 
        next(error);
    }
}

export const getByIdUnitKerjaController = async (req: Request, res : Response, next: NextFunction) => {
    try{
        const getByIdUnitKerja = await getByIdUnitKerjaService(req.params.id);
        if (!getByIdUnitKerja) {
            return res.status(404).json({ error: 'unit kerja not found' });
          }
        res.json(getByIdUnitKerja);
    }catch (error){ 
        next(error);
    }
}

export const updateUnitKerjaController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedUnitKerja = await updateUnitKerjaService(req.params.id, req.body);
        if (!updatedUnitKerja) {
            return res.status(404).json({ error: 'UnitKerja not found' });
        }
        res.json(updatedUnitKerja);
    } catch (error) {
        next(error);
    }
}

export const deleteUnitKerjaController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedUnitKerja = await deleteUnitKerjaService(req.params.id);
        if (!deletedUnitKerja) {
            return res.status(404).json({ error: 'UnitKerja not found' });
        }
        res.json({ message: 'UnitKerja successfully deleted', deletedUnitKerja });
    } catch (error) {
        next(error);
    }
}