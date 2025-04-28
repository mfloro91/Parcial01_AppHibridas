import { getAllService, getAllServiceById, saveService } from "../models/serviceModel.js";
import {v4 as uuidv4} from "uuid";

export async function createService (data) {
    const services = await getAllService();
    
    const newService = {
        id: uuidv4(),
        ...data
    };

    services.push(newService);
    await saveService(services);
    return newService;
}