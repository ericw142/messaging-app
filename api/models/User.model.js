const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: { type: String },
    joinedDate: { type: Date}
})

const User = mongoose.model('user', UserSchema)
module.exports = User