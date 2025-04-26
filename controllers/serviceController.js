import { getAllService, getAllServiceById } from "../models/serviceModel.js";

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