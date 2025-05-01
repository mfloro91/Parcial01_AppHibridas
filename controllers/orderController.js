import { getAllOrder, getAllOrderById, saveOrder } from "../models/orderModel.js";
import * as orderService from "../services/orderService.js";

// Funcion para obtener todas las órdenes
export const getAllOrders = (req, res) => {
    const orders = getAllOrder();
    res.json(orders)
}


// Funcion para ver ordenes por ID
export const getAllOrdersById = (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = getAllOrderById(orderId);

    if (order) {
        res.json(order)
    } else {
        res.status(404).json({Error: "Órden no encontrada"})
    }
}

// Funcion para hacer una nueva orden
export async function addOrder (req, res) {
    const {hotel_id, service_id, room_number, note, status} = req.body;
    const newOrder = await orderService.createOrder({hotel_id, service_id, room_number, note, status});
    res.status(201).json(newOrder);
}


// Funcion solo para admins (modifican status de la orden)
export const editOrderStatus = (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = getAllOrderById(orderId);
    const orders = getAllOrder();

    if (!order) {
       return res.status(404).json({Error: "Órden no encontrada"})
    }

    const {status} = req.body;

    order.status = status;

    saveOrder(orders);
    res.json(order);

}