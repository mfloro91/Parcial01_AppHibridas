import orderModel from "../models/orderModel.js";
import hotelModel from "../models/hotelModel.js";
import serviceModel from "../models/serviceModel.js";

// Funcion para obtener todos los pedidos
export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().populate('hotel_id', 'name country city').populate('service_id', 'title description availableHours');
        res.json(orders)
    } catch(err) {
        res.status(400).json({error: err.message})
    }

}

// Funcion para obtener pedidos por ID
export const getAllOrdersById = async (req, res) => {
    try {
        const orders = await orderModel.findById(req.params.id).populate('hotel_id', 'name country city').populate('service_id', 'title description availableHours');
        res.json(orders)
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Funcion para agregar nuevos pedidos
export async function addOrder (req, res) {
    try {
        const { hotel_id, service_id, room_number, note, status } = req.body;

        // Verificar si el hotel existe
        const hotel = await hotelModel.findById(hotel_id);
        if (!hotel) {
            return res.status(400).json({ error: "Hotel no encontrado" });
        }

        // Verificar si el servicio existe
        const service = await serviceModel.findById(service_id);
        if (!service) {
            return res.status(400).json({ error: "Servicio no encontrado" });
        }

        // Crear un nuevo pedido
        const order = new orderModel({
            hotel_id,
            service_id,
            room_number,
            note,
            status
        });

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

