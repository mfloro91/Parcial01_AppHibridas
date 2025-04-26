import { services } from "../data/serviceData.js";

export const getAllService = () => {
    return services;
}

export const getAllServiceById = (id) => {
    return services.find(service => service.id === id);
}