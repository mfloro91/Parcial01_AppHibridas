import { services } from "../data/serviceData.js";
import fs from "fs/promises";
import path from "path";

const dataPath = path.resolve('data/serviceData.js');

export const getAllService = () => {
    return services;
}

export const getAllServiceById = (id) => {
    return services.find(service => service.id === id);
}

export async function saveService(services){
    await fs.writeFile(dataPath, JSON.stringify(services));
}