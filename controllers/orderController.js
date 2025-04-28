import { getAllOrder, getAllOrderById } from "../models/orderModel.js";
import * as orderService from "../services/orderService.js";

export const getAllOrders = (req, res) => {
    const orders = getAllOrder();
    res.json(orders)
}

export const getAllOrdersById = (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = getAllOrderById(orderId);

    if (order) {
        res.json(order)
    } else {
        res.status(404).json({Error: "Órden no encontrada"})
    }
}

export async function addOrder (req, res) {
    const {hotel_id, service_id, room_number, note, status} = req.body;
    const newOrder = await orderService.createOrder({hotel_id, service_id, room_number, note, status});
    res.status(201).json(newOrder);
}