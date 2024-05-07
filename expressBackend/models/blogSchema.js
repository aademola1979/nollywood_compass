const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    author:{},
    state: {type: Boolean, required: true},
    read_count:{type: Number},
    read_time:{type: Number},
    tags: [],
    body: {type: String, required: true}

},
{
    timestamps: true
})