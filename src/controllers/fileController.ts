import { Request, Response, NextFunction } from 'express';
import { deleteFile } from '../services/fileService';
import { error } from 'console';
// Controller function for handling file uploads
export const uploadFile = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.file) {
      res.json({ message: 'File uploaded successfully', filePath: req.file.path });
    } else {
      res.status(400).json({ message: 'File upload failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error'});
  }
};

export const delFile = async (req: Request, res: Response, next: NextFunction) => {
  const { fileName } = req.body;
  try{
    await deleteFile(fileName);
    res.status(200).send('File deleted successfully');
  }catch (e){
    res.status(500).send('Error deleting file');
  }
}
