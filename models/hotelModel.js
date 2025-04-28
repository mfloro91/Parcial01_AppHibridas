import { hotels } from "../data/hotelData.js";
import fs from "fs/promises";
import path from "path";

const dataPath = path.resolve('data/hotelData.js');

export const getAllHotel = () => {
    return hotels;
}

export const getAllHotelById = (id) => {
    return hotels.find(hotel => hotel.id === id);
}

export async function saveHotel(hotels){
    await fs.writeFile(dataPath, JSON.stringify(hotels));
}