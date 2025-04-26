import { getAllOrder, getAllOrderById } from "../models/orderModel.js";

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