const mongoose=require('mongoose')

const connectDB=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MOGO_URI)
        console.log(`connected to : ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}

module.exports=connectDB