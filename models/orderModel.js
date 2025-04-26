import { orders } from "../data/orderData.js";

export const getAllOrder = () => {
    return orders;
}

export const getAllOrderById = (id) => {
    return orders.find(order => order.id === id);
}