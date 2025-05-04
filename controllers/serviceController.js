import serviceModel from "../models/serviceModel.js";

// Funcion para obtener todos los servicios
export const getAllServices = async (req, res) => {
    try {
        const services = await serviceModel.find();
        res.json(services)
    } catch(err) {
        res.status(400).json({error: err.message})
    }

}

// Funcion para obtener servicios por ID
export const getAllServicesById = async (req, res) => {
    try {
        const services = await serviceModel.findById(req.params.id);
        res.json(services)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Funcion para agregar nuevos servicios
export async function addService (req, res) {
    try {
        const service = new serviceModel({...req.body});
        const newService = await service.save();
        res.json(newService)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
} 


// Funcion para editar un servicio

export const editService = async (req, res) => {
    try {
        const serviceUpdated = await serviceModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(serviceUpdated)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Funcion para eliminar servicio existente
export const deleteService = async (req, res) => {
    try {
        const serviceDeleted = await serviceModel.findByIdAndDelete(req.params.id);
        res.json(serviceDeleted)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

