const express=require('express')
const morgan=require('morgan')
const dotenv=require('dotenv')
const path=require('path')
const bodyparser=require('body-parser')
const dbconnection=require('./config/db')
const routers=require('./routes/routes')

const app=express()

// loading dotenv
dotenv.config({path:'./config/config.env'})

// loading db
dbconnection()


// midlewares
app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


// routes

app.use('/' , routers)












const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`server is listening to port : ${port}`))