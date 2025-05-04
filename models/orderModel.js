import mongoose from "mongoose";

const orderSchema = new mongoose.Schema( {
    hotel_id: {
        type: Number,
        required: true,
    },
    service_id: {
        type: Number,
        required: true,
    },
    room_number: {
        type: Number,
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Order', orderSchema);