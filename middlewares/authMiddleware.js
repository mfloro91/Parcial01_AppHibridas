import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET;

// Autenticacion para restringir rutas
export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({message: "No tienes autorización para ingresar"})
    }

    if (authHeader) {
        const token = authHeader.split(" ") [1]
       
        jwt.verify(token, secretKey, (err, payload) => {
            if (err) {
                return res.status(403).json({message: "Token inválido"})
            }
            req.user = payload;
            next()
        })
    } else {
        res.sendStatus(401)
    }
}