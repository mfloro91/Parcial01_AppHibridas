import orderModel from "../models/orderModel.js";

// Funcion para obtener todos los pedidos
export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.json(orders)
    } catch(err) {
        res.status(400).json({error: err.message})
    }

}

// Funcion para obtener pedidos por ID
export const getAllOrdersById = async (req, res) => {
    try {
        const orders = await orderModel.findById(req.params.id);
        res.json(orders)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Funcion para agregar nuevos pedidos
export async function addOrder (req, res) {
    try {
        const order = new orderModel({...req.body});
        const newOrder = await order.save();
        res.json(newOrder)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
} 


// Funcion solo para admins (modifican status de la orden)

export const editOrderStatus = async (req, res) => {
    const {status} = req.body;
    try {
        const orderUpdated = await orderModel.findByIdAndUpdate(req.params.id, { status }, {new: true});
        res.json(orderUpdated)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Funcion para eliminar pedido existente
export const deleteOrder = async (req, res) => {
    try {
        const orderDeleted = await orderModel.findByIdAndDelete(req.params.id);
        res.json(orderDeleted)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

