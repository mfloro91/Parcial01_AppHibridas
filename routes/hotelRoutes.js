import express from "express"
import { getAllHotels, getAllHotelsById, addHotel } from "../controllers/hotelController.js";

const router = express.Router();

// Endpoints para hoteles

// Lista todos los hoteles (solo para superadmin)
router.get('/', getAllHotels)

// Ver detalle de un hotel por ID (solo para superadmin)
router.get('/:id', getAllHotelsById)

// Crear info relativa a un nuevo hotel (solo para admins)
router.post('/', addHotel);

/*
router.put('/:id')
router.delete('/:id')*/

export default router;