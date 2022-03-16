const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    content: { type: String }, 
    sentDate: { type: Date },
    userName: { type: String },
    destination: { type: String },
})

const Message = mongoose.model('message', MessageSchema)
module.exports = Message