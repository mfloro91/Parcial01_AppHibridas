import { getAllUser, saveUser } from "../models/userModel.js";
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";

// Funcion para obtener todos los usuarios
export const getAllUsers = (req, res) => {
    const users = getAllUser();
    const userWithoutPassword = users.map(user => { 
        const {password, ...userWithoutPassword} = user; 
        return userWithoutPassword
    })
    res.status(200).json(userWithoutPassword)
}

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


