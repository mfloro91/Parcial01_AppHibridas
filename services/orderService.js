import { getAllOrder, getAllOrderById, saveOrder } from "../models/orderModel.js";
import {v4 as uuidv4} from "uuid";

export async function createOrder (data) {
    const orders = await getAllOrder();
    
    const newOrder = {
        id: uuidv4(),
        ...data
    };

    orders.push(newOrder);
    await saveOrder(orders);
    return newOrder;
}