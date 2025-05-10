import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    languages: [{type: String}],
    country: {
        type: String,
        required: false,
    }, city: {
        type: String,
        required: false,
    }
})

export default mongoose.model('Hotel', hotelSchema);