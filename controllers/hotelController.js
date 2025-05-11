import hotelModel from "../models/hotelModel.js";

// Funcion para obtener todos los hoteles
export const getAllHotels = async (req, res) => {
    try {
        const hotels = await hotelModel.find();
        res.json(hotels)
    } catch(err) {
        res.status(400).json({error: err.message})
    }

}

// Funcion para obtener hoteles por ID
export const getAllHotelsById = async (req, res) => {
    try {
        const hotels = await hotelModel.findById(req.params.id);
        res.json(hotels)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Funcion para agregar nuevos hoteles
export async function addHotel (req, res) {
    try {
        const hotel = new hotelModel({...req.body});
        const newHotel = await hotel.save();
        res.json(newHotel)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
} 


// Funcion para editar hotel existente
export const editHotel = async (req, res) => {
    try {
        const hotelUpdated = await hotelModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(hotelUpdated)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Funcion para eliminar hotel
export const deleteHotel = async (req, res) => {
    try {
        const hotelDeleted = await hotelModel.findByIdAndDelete(req.params.id);
        res.json(hotelDeleted)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}


// Funcion para buscar hoteles por nombre - ubicación
export const searchAllHotelsByUbication = async (req, res) => {
    try {
        const {search} = req.query;
        const hotels = await hotelModel.find({
            $or: [
                { city: { $regex: search, $options: 'i' } },
                { country: { $regex: search, $options: 'i' } }
            ]
        });
        res.json(hotels)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}
