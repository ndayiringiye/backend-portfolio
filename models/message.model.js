import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "userName should provide"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    message: {
        type: String,
        required: true,
    }
}, { Timestamp: { type: Date, default: Date.now } });

const Message = mongoose.model("Massage", messageSchema)