const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    password2: String
});

const User = mongoose.model('user', userSchema);

module.exports = User