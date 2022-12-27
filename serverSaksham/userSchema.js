const { strict } = require("assert");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
    },
    age: {
        type: String,
        
    },
    mobile: {
        type: Number,
        
    },
    work: {
        type: String,
        
    },
    add: {
        type: String,
        
    },
    
    
},{strict:false});

const users = new mongoose.model("users",userSchema);


module.exports = users;