const mongoose=require('mongoose')
var schema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: { type: String, default: 'user' }
})

var UserModel=mongoose.model("user",schema)
module.exports=UserModel