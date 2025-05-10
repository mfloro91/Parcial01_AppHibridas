import express from "express"
import { addOrder, deleteOrder, editOrderStatus, getAllOrders, getAllOrdersById } from "../controllers/orderController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Endpoints para órdenes o pedidos de los huéspedes


// Lista todas las solicitudes de los huespedes (para admins del hotel)
router.get('/', /*authenticateJWT,*/ getAllOrders)

// Ver detalle de una solicitud (solo para admins)
router.get('/:id', /*authenticateJWT,*/ getAllOrdersById)

// Crear una nueva solicitud 
router.post('/', addOrder)

// Cambiar el estado de la solicitud (solo para admin)
router.patch('/:id', /*authenticateJWT,*/ editOrderStatus);

// Eliminar la solicitud
router.delete('/:id', deleteOrder);

export default router;