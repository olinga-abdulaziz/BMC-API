const express=require('express')
const model=require('../model/model')
const router=express.Router()


router.get('/', async (req,res)=>{
    
    try {
        const mydata=await model.find()
        res.send(mydata)
    } catch (err) {
        console.log(err)
    }
})

router.post('/api/add', async (req,res)=>{
    const mymodeldata=new model({
        name:req.body.name,
        category:req.body.category,
        status:req.body.status,
    })

    const savedata=await mymodeldata.save().then(res.send("inserted successfully !!!"))
})

router.patch('/api/update/:id',async (req,res)=>{
    try {
        const updatedata=await model.updateOne({__id:req.params.id})
    } catch (err) {
        res.send(err)
        console.log(err)
    }
})



router.get('/api/:id',async (req,res)=>{

    try {
        const singledata=await model.findById(req.params.id)
        res.json(singledata)
    } catch (err) {
        console.log(err)
    }
})

router.delete('/delete/:id',async (req,res)=>{
    try {
        const deletedata=await model.remove({ __id:req.params.id})
        res.send('delete suucessfully')
    } catch (err) {
        console.log(err)
    }
})




module.exports =router