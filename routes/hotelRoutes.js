import express from "express"
import { getAllHotels, getAllHotelsById, addHotel, editHotel, deleteHotel } from "../controllers/hotelController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Endpoints para hoteles

// Lista todos los hoteles (solo para superadmin)
router.get('/', authenticateJWT, getAllHotels)

// Ver detalle de un hotel por ID (solo para superadmin)
router.get('/:id', authenticateJWT, getAllHotelsById)

// Crear info relativa a un nuevo hotel (solo para admins)
router.post('/', authenticateJWT, addHotel);

// Editar un hotel existente
router.put('/:id', authenticateJWT, editHotel);

// Elimina un hotel
router.delete('/:id', authenticateJWT, deleteHotel);

export default router;