import { getAllService, getAllServiceById } from "../models/serviceModel.js";
import * as serviceService from "../services/serviceService.js";

export const getAllServices = (req, res) => {
    const services = getAllService();
    res.json(services)
}

export const getAllServicesById = (req, res) => {
    const serviceId = parseInt(req.params.id);
    const service = getAllServiceById(serviceId);

    if (service) {
        res.json(service)
    } else {
        res.status(404).json({Error: "Servicio no encontrado"})
    }
}

export async function addService (req, res) {
    const {hotel_id, title, description, availableHours} = req.body;
    const newService = await serviceService.createService({hotel_id, title, description, availableHours});
    res.status(201).json(newService);
}