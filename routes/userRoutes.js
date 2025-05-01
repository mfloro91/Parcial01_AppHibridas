import express from "express"
import { getAllUsers, createUser } from "../controllers/userController.js";

const router = express.Router();

// Endpoints para usuarios

// Lista todos los usuarios
router.get('/', getAllUsers);

// Crear nuevo usuario
router.post('/', createUser);

export default router;