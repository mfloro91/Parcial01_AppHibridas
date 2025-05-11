import express from "express"
import { addOrder, deleteOrder, editOrderStatus, getAllOrders, getAllOrdersById, searchOrdersByHotel } from "../controllers/orderController.js";
import { authenticateJWT, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Endpoints para órdenes o pedidos de los huéspedes


// Lista todas las solicitudes de los huespedes (para admins del hotel)
router.get('/', authenticateJWT, authorizeRoles('superadmin', 'admin', 'staff'), getAllOrders)

// Filtrar ordenes según hotel y teniendo en cuenta distintos filtros posibles: estado o habitación. Las ordena por antiguedad - primero las órdenes realizadas primeras y de mayor urgencia (solo para admins del hotel)
router.get('/search', authenticateJWT, authorizeRoles('superadmin', 'admin', 'staff'), searchOrdersByHotel)

// Ver detalle de una solicitud (solo para admins)
router.get('/:id', authenticateJWT, authorizeRoles('superadmin', 'admin', 'staff'), getAllOrdersById)

// Crear una nueva solicitud 
router.post('/', authenticateJWT, authorizeRoles('user', 'superadmin'), addOrder)

// Cambiar el estado de la solicitud (solo para admin)
router.patch('/:id', authenticateJWT, authorizeRoles('superadmin', 'admin', 'staff'), editOrderStatus);

// Eliminar la solicitud
router.delete('/:id', authenticateJWT, authorizeRoles('superadmin', 'admin', 'staff'), deleteOrder);

export default router;