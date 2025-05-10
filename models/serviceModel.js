import mongoose, {Schema} from "mongoose";
import hotelModel from "./hotelModel.js";

const serviceSchema = new mongoose.Schema( {
    hotel_id: {
        type: Schema.Types.ObjectId, ref:'Hotel',
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
    },
})

export default mongoose.model('Service', serviceSchema);