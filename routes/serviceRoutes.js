import express from "express"
import { addService, deleteService, editService, getAllServices, getAllServicesById } from "../controllers/serviceController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Endpoints para servicios


// Lista de servicios ofrecidos por el hotel
router.get('/', getAllServices)

// Obtener detalle del servicio
router.get('/:id', getAllServicesById)

// Crear un nuevo servicio (solo para admins)
router.post('/', /*authenticateJWT,*/ addService)

// Editar un servicio (solo para admins)
router.put('/:id', /*authenticateJWT,*/ editService);

// Eliminar un servicio (solo para admins)
router.delete('/:id', /*authenticateJWT,*/ deleteService);

export default router;