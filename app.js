//imports
require("dotenv/config")
const mongoose  = require("mongoose")
const userRouter = require("./router/userRouter")
const PSRouter = require("./router/ParkingSpotRouter")
const vehicalRouer = require("./router/vehicalRouter")
const reserRouter = require("./router/ReservRouter")
const tranRouter = require("./router/tranRouter")
const express = require("express")
//decalration app - express
const app = express()
//middleware to understand db that data comming in json format
app.use(express.json())

//default route
app.get('/',(req,res)=>{
    res.send("Welcome To Parking System !!!")
})

app.use('/api/user',userRouter)
app.use('/api/parkingspot',PSRouter)
app.use('/api/vehical',vehicalRouer)
app.use('/api/reservation',reserRouter)
app.use('/api/transaction',tranRouter)

//listning 
app.listen(process.env.PORT)

//function for connection
async function db(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = res.STATES
        console.log(data.connected);
    } catch (error) {
        console.log("not connected");
    }
} 

db()