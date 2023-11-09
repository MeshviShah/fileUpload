import multer from 'multer';
import { Request, Response } from 'express';
import fs from 'fs';

const uploadDirectory = './uploads';

// Ensure the upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    return cb(null, uploadDirectory);
  },

  filename: (req: Request, file, cb) => {
    return cb(
      null,
      Date.now().toString() + '.' + file.originalname.split('.').pop()
    );
  },
});

const upload = multer({
  storage,
});

export default upload;
