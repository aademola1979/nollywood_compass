const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name:{type: String, required: true},
    last_name: {type: String, required: true},
    hash_password: {type: String, required: true},
    email:{type:String, required: true, unique: true}

},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)