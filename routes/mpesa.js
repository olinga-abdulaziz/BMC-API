const express=require('express')
const { token, stkpush} =require('../controllers/MpesaController')
const router=express.Router()


router.post('/stk/push',token,stkpush)

router.post('/callback',(req,res)=>{
    res.send(req.body)
})


module.exports=router