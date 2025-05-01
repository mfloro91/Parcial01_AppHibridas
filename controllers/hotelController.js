import { getAllHotel, getAllHotelById, saveHotel } from "../models/hotelModel.js";
import * as hotelService from "../services/hotelService.js";

// Funcion para obtener todos los hoteles
export const getAllHotels = (req, res) => {
    const hotels = getAllHotel();
    res.json(hotels)
}

// Funcion para obtener hoteles por ID
export const getAllHotelsById = (req, res) => {
    const hotelId = parseInt(req.params.id);
    const hotel = getAllHotelById(hotelId);

    if (hotel) {
        res.json(hotel)
    } else {
        res.status(404).json({Error: "Hotel no encontrado"})
    }
}

// Funcion para agregar nuevos hoteles
export async function addHotel (req, res) {
    const {name, logo, description, languages} = req.body;
    const newHotel = await hotelService.createHotel({name, logo, description, languages});
    res.status(201).json(newHotel);
}


// Funcion para editar hotel existente
export const editHotel = (req, res) => {
    const hotelId = parseInt(req.params.id);
    const hotel = getAllHotelById(hotelId);
    const hotels = getAllHotel();

    if (!hotel) {
       return res.status(404).json({Error: "Hotel no encontrado"})
    }

    const {name, logo, description, languages} = req.body;

    if (!name || !logo || !description || !languages) {
        return res.status(400).send('Los campos son obligatorios');
    }

    hotel.name = name;
    hotel.logo = logo;
    hotel.description = description;
    hotel.languages = languages;

    saveHotel(hotels);

    res.json(hotel);

}

// Funcion para eliminar hotel existente
export const deleteHotel = (req, res) => {
    const hotels = getAllHotel();
    const hotelIndex = hotels.findIndex(h => h.id === parseInt (req.params.id));

    if (hotelIndex === -1) {
       return res.status(404).json({Error: "Hotel no encontrado"})
    }

    const deletedHotel = hotels.splice(hotelIndex, 1);
    saveHotel(hotels);
    res.json(deletedHotel);

}


