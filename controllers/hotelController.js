import { getAllHotel, getAllHotelById } from "../models/hotelModel.js";

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