import express from "express"
import { getAllServices, getAllServicesById } from "../controllers/serviceController.js";

const router = express.Router();

// Endpoints para servicios


// Lista de servicios ofrecidos por el hotel
router.get('/', getAllServices)

// Obtener detalle del servicio
router.get('/:id', getAllServicesById)

/*
// Crear un nuevo servicio
router.post('/')

// Editar un servicio
router.put('/:id')

// Eliminar un servicio
router.delete('/:id')*/

export default router;