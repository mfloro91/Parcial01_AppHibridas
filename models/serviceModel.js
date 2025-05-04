import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema( {
    hotel_id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    availableHours: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Service', serviceSchema);