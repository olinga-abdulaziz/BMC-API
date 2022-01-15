const express=require('express')
const router=express.Router()
const Member=require('../model/Member')

router.get('/',(req,res)=>{
    res.json({message:"welcome"})
})

// Register new Member
router.post('/register', async (req,res)=>{
    console.log("this function urn");
    const member=new Member({
        name:req.body.name,
        address:req.body.address,
        gender:req.body.gender,
        code:req.body.code,
        createdAt:req.body.createdAt
    })

    try {
        const saveMember=await member.save()
        res.json({message:"Member Registered Successfull"})
    } catch (err) {
        res.json({error:err})
        console.log(err);
    }
})


// getl all members

router.get('/all',async (req,res)=>{
    try {
        const members=await Member.find()
        res.json(members)
    } catch (err) {
        console.log(err);
    }
})

// get single member

router.get('/:id',async(req,res)=>{
    try {
       const member=await Member.findById({_id:req.params.id}) 
       res.json(member)
    } catch (err) {
        console.log(err);
    }
})

// update member

router.post('/:id',async(req,res)=>{
    try {
        const member=await Member.updateOne({_id:req.params.id},{$set:{name:req.body.nam,address:req.body.address,gender:req.body.gender,code:req.body.code,createdAt:req.body.createdAt}})
        res.json({message:"Updated successfully"}) 
    } catch (err) {
        console.log(err);
    }
})

// delete member

router.delete('/:id',async (req,res)=>{

    try {
        const member=await Member.findById({_id:req.params.id})
        member.remove()
        res.json({message:"deleted successfully"})
    } catch (err) {
        console.log(err);
    }
})


module.exports=router