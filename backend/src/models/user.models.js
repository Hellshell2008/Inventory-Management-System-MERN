const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        lower:true,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        trim:true,
        required:[true,"Password is Required"]
    }
},{timestamps:true})

//

const model = mongoose.model("user",Schema)

module.exports = model