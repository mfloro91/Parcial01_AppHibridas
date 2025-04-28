import { getAllHotel, getAllHotelById } from "../models/hotelModel.js";
import * as hotelService from "../services/hotelService.js";

export const getAllHotels = (req, res) => {
    const hotels = getAllHotel();
    res.json(hotels)
}

export const getAllHotelsById = (req, res) => {
    const hotelId = parseInt(req.params.id);
    const hotel = getAllHotelById(hotelId);

    if (hotel) {
        res.json(hotel)
    } else {
        res.status(404).json({Error: "Hotel no encontrado"})
    }
}

export async function addHotel (req, res) {
    const {name, logo, description, languages} = req.body;
    const newHotel = await hotelService.createHotel({name, logo, description, languages});
    res.status(201).json(newHotel);
}


