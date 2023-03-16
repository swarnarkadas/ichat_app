const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    password2: String
});

userSchema.pre("save", function(next){
    
    const salt = bcrypt.genSaltSync(12);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User