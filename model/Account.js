
const mongoose=require('mongoose')

const AccountSchema=new mongoose.Schema({
        member:{
        type:String,
        required:true
    },
        amount:{
        type:mongoose.Schema.Types.Number
    },
        depositedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Account',AccountSchema)