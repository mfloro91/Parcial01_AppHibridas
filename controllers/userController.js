import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET;

// Funcion para crear nuevo usuario
export async function createUser (req, res) {
    try {
        const {name, userName, email, password} = req.body;
        
        if (!name || !userName || !email || !password) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new userModel({name, userName, email, password: hashedPassword});
        const newUser = await user.save();
        
        const {password:_, ...userWithoutPassword} = newUser.toObject();
        res.status(201).json(userWithoutPassword);

    } catch(err) {
        res.status(400).json({error: err.message})
    }
} 

// Funcion para hacer login de usuarios

export async function loginUser (req, res) {
    const users = getAllUser();
    const {email, password} = req.body;

    const user = users.find(u => u.email === email);
    if(!user) {
        return res.status(404).json({message: "Usuario no encontrado"})
    }

    const validPassword = await bcrypt.compare (password, user.password)
    if(!validPassword) {
        return res.status(401).json({message: "Password incorrecto"})
    }

    const token = jwt.sign({id: user.id, email: user.email}, secretKey, {expiresIn: '30min'})

    res.status(200).json({token})
}


// Funcion para obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().select('-password');
        res.json(users)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

