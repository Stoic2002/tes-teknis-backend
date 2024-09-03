import multer from 'multer';
import path from 'path';
import fs from 'fs';
import secFs from 'fs/promises';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join('src', 'file');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only .png, .jpg and .jpeg formats are allowed!'));
  }
};

// Multer upload instance
export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: fileFilter,
});


export const deleteFile = async (fileName: String): Promise<void> => {
  try{
    // Normalize and resolve the file path
    const resolvedPath = path.resolve(`./src/file/${fileName}`);

    // Check if file exists before attempting to delete
    await secFs.access(resolvedPath);

    // Delete the file
    await secFs.unlink(resolvedPath);
  }catch (error){
    if (error instanceof Error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        console.warn(`File not found: ${fileName}`);
      } else {
        console.error(`Error deleting file: ${fileName}`, error);
      }
    }
    // Re-throw the error if you want calling code to handle it
    throw error;
  }
}




