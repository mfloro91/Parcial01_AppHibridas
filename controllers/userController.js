import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import hotelModel from "../models/hotelModel.js";

dotenv.config();
const secretKey = process.env.JWT_SECRET;

// Funcion para crear nuevo usuario
export async function createUser (req, res) {
    try {
        const {hotel_id, name, userName, email, role, password} = req.body;
        
        if (!name || !userName || !email || !password) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        // Verificar si el hotel existe
        const hotel = await hotelModel.findById(hotel_id);
        if (!hotel) {
            return res.status(400).json({ error: "Hotel no encontrado" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new userModel({hotel_id, name, userName, email, role, password: hashedPassword});
        const newUser = await user.save();
        
        const {password:_, ...userWithoutPassword} = newUser.toObject();
        res.status(201).json(userWithoutPassword);

    } catch(err) {
        res.status(400).json({error: err.message})
    }
} 

// Funcion para hacer login de usuarios

export async function loginUser (req, res) {
    const {email, password} = req.body;

    try {
        const user = await userModel.findOne({ email });
    
        if(!user) {
            return res.status(404).json({message: "Usuario no encontrado"})
        }

    const validPassword = await bcrypt.compare (password, user.password)
    if(!validPassword) {
        return res.status(401).json({message: "Password incorrecto"})
    }

    const token = jwt.sign(
        {
            id: user.id, 
            email: user.email,
            role: user.role,
            hotel_id: user.hotel_id
        }, 
        secretKey, 
        {expiresIn: '30min'}
    )

    res.status(200).json({token, role: user.role})

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}


// Funcion para obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().select('-password').populate('hotel_id', 'name logo');
        res.json(users)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

