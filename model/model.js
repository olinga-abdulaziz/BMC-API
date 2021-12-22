const mongoose=require('mongoose')


const MyModel=mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    status:{
        type:String
    }
})

module.exports=mongoose.model('mymodel',MyModel)
