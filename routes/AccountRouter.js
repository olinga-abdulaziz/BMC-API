const express=require('express')
const router=express.Router()
const Account=require('../model/Account')

// get all accounts transactions
router.get('/', async (req,res)=>{
    try {
        const accounts=await Account.find()
        res.json(accounts)
    } catch (err) {
        console.log(err);
    }
  
})

router.get('/:id', async (req,res)=>{
    try {
        const accounts=await Account.findOne({member:req.params.id})
        res.json(accounts)
    } catch (err) {
        console.log(err);
    }
})


// deposit 
router.post('/deposit',async (req,res)=>{

    const account=new Account({
        member:req.body.member,
        amount:req.body.amount,
        depositedAt:req.body.depositedAt
    })

    try {
        const deposit= await account.save()
        res.json({message:"deposited successfully"})
    } catch (err) {
        console.log(err);
    }
})

// // delete transaction

router.delete('/:id',async (req,res)=>{
    try {
        const trans=await Account.findById({_id:req.params.id})
        trans.remove()
        res.json({message:"deleten sucessfully"})
    } catch (err) {
        console.log(err);
    }
})



module.exports=router