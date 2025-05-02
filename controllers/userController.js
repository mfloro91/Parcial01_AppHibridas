import { getAllUser, saveUser } from "../models/userModel.js";
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET;


// Funcion para crear nuevo usuario

export async function createUser (req, res) {
    const users = getAllUser();

    const {name, userName, email, password} = req.body;

    if (!name || !userName || !email || !password) {
        return res.status(400).json({message: "Los campos son obligatorios"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: uuidv4(),
        name,
        userName,
        email,
        password: hashedPassword
    }

    users.push(newUser);
    await saveUser(users);

    const {password:_, ...userWithoutPassword} = newUser;
    
    res.status(201).json(userWithoutPassword);

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
export const getAllUsers = (req, res) => {
    const users = getAllUser();
    const userWithoutPassword = users.map(user => { 
        const {password, ...userWithoutPassword} = user; 
        return userWithoutPassword
    })
    res.status(200).json(userWithoutPassword)
}

