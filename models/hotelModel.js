import { hotels } from "../data/hotelData.js";

export const getAllHotel = () => {
    return hotels;
}

export const getAllHotelById = (id) => {
    return hotels.find(hotel => hotel.id === id);
}