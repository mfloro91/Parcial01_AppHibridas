import { orders } from "../data/orderData.js";
import fs from "fs/promises";
import path from "path";

const dataPath = path.resolve('data/orderData.js');

export const getAllOrder = () => {
    return orders;
}

export const getAllOrderById = (id) => {
    return orders.find(order => order.id === id);
}

export async function saveOrder(orders){
    await fs.writeFile(dataPath, JSON.stringify(orders));
}