import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model('User', userSchema);