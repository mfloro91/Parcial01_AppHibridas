import express from "express"
import { getAllHotels, getAllHotelsById } from "../controllers/hotelController.js";

const router = express.Router();

// Endpoints para hoteles

// Lista todos los hoteles
router.get('/', getAllHotels)

// Ver detalle de un hotel por ID
router.get('/:id', getAllHotelsById)


/*
router.post('/')
router.put('/:id')
router.delete('/:id')*/

export default router;