import express from "express"

const router = express.Router();

// Endpoints para servicios

// Lista de servicios ofrecidos por el hotel
router.get('/')

// Obtener detalle del servicio
router.get('/:id')

// Crear un nuevo servicio
router.post('/')

// Editar un servicio
router.put('/:id')

// Eliminar un servicio
router.delete('/:id')

export default router;