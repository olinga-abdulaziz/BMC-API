const mongoose=require('mongoose')

const MemberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        uppercase:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

module.exports=mongoose.model('Member',MemberSchema)