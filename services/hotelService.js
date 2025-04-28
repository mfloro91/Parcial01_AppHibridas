import { getAllHotel, getAllHotelById, saveHotel } from "../models/hotelModel.js";
import {v4 as uuidv4} from "uuid";

export async function createHotel (data) {
    const hotels = await getAllHotel();
    
    const newHotel = {
        id: uuidv4(),
        ...data
    };

    hotels.push(newHotel);
    await saveHotel(hotels);
    return newHotel;
}