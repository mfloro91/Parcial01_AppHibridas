import { getAllService, getAllServiceById, saveService } from "../models/serviceModel.js";
import * as serviceService from "../services/serviceService.js";


// Funcion para obtener todos los servicios
export const getAllServices = (req, res) => {
    const services = getAllService();
    res.json(services)
}

// Funcion para filtrar servicios por ID
export const getAllServicesById = (req, res) => {
    const serviceId = parseInt(req.params.id);
    const service = getAllServiceById(serviceId);

    if (service) {
        res.json(service)
    } else {
        res.status(404).json({Error: "Servicio no encontrado"})
    }
}

// Funcion para agregar nuevo servicio
export async function addService (req, res) {
    const {hotel_id, title, description, availableHours} = req.body;
    const newService = await serviceService.createService({hotel_id, title, description, availableHours});
    res.status(201).json(newService);
}

// Funcion para editar servicio existente
export const editService = (req, res) => {
    const serviceId = parseInt(req.params.id);
    const service = getAllServiceById(serviceId);
    const services = getAllService();

    if (!service) {
       return res.status(404).json({Error: "Servicio no encontrado"})
    }

    const {hotel_id, title, description, availableHours} = req.body;

    if (!hotel_id || !title || !description || !availableHours) {
        return res.status(400).send('Los campos son obligatorios');
    }

    service.hotel_id = hotel_id;
    service.title = title;
    service.description = description;
    service.availableHours = availableHours;

    saveService(services);
    res.json(service);

}