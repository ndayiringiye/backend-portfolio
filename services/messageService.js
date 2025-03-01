import Message from "../models/message.model.js";

export const createMessageService = async (req ,res) =>{
    try {
        const {fullName, email, contents} = req.body;
        const message = new Message({fullName, email, contents});
        await message.save();
        console.log("send message successfully")
        res.status(201).json({success:true, data: message, message: "send message successfully"})
    } catch (error) {
        res.status(500).json({success:false, error: error.message });
    }
}