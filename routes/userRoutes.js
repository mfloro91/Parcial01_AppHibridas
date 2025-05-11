import express from "express"
import { getAllUsers, createUser, loginUser } from "../controllers/userController.js";
import { authenticateJWT, authorizeRoles } from "../middlewares/authMiddleware.js";


const router = express.Router();

// Endpoints para usuarios

// Lista todos los usuarios (solo para superadmins)
router.get('/', authenticateJWT, authorizeRoles('superadmin'), getAllUsers);

// Crear nuevo usuario
router.post('/', createUser);

// Login usuario
router.post('/login', loginUser);

export default router;