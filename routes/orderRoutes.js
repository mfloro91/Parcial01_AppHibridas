import express from "express"
import { addOrder, editOrderStatus, getAllOrders, getAllOrdersById } from "../controllers/orderController.js";

const router = express.Router();

// Endpoints para órdenes o pedidos de los huéspedes


// Lista todas las solicitudes de los huespedes (para admins del hotel)
router.get('/', getAllOrders)

// Ver detalle de una solicitud
router.get('/:id', getAllOrdersById)

// Crear una nueva solicitud (vista habilitada para el usuario o huesped)
router.post('/', addOrder)

// Cambiar el estado de la solicitud (solo para admin)
router.patch('/:id', editOrderStatus);

/*

// Eliminar la solicitud? (no se si ofrecer esta opcion)
router.delete('/:id')*/

export default router;