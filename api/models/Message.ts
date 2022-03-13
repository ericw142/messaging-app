const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    user: { type: String } ,
    tasks: { type: Object },
    columns: { type: Object },
    columnOrder: { type: Array },
})

const Message = mongoose.model('message', MessageSchema)
module.exports = Message