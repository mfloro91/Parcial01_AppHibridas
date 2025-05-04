import express from "express"
import { getAllHotels, addHotel, getAllHotelsById, editHotel, deleteHotel } from "../controllers/hotelController.js";

const router = express.Router();

// Endpoints para hoteles

// Lista todos los hoteles (solo para superadmin)
router.get('/', getAllHotels)

// Ver detalle de un hotel por ID (solo para superadmin)
router.get('/:id', getAllHotelsById)

// Crear info relativa a un nuevo hotel (solo para admins)
router.post('/', addHotel);

// Editar un hotel existente (solo para admins)
router.put('/:id', editHotel);

// Elimina un hotel (solo para superadmins)
router.delete('/:id', deleteHotel);

export default router;