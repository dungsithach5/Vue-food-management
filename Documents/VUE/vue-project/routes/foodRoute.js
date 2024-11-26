import express from 'express';
import multer from 'multer';
const router = express.Router();

import foodController from '../controllers/foodController.js';

// Cấu hình Multer để upload hình ảnh												
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       return cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
       return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

router.route("/")
    .post(upload.single('image'), foodController.createfood)
    .get(foodController.getfoodById);

router.route("/:id")
    .patch(foodController.updatefood)
    .delete(foodController.deletefood);

export default router;
