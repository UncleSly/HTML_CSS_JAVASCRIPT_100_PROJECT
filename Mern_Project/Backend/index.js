require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const app = express()
const routers = require("./routes/router")

const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use("/api/workouts", routers)



mongoose.connect(
    process.env.MOGODB_URI
).then(()=>{
    app.listen(PORT, ()=>{
        console.log('db connected and app running on Port:', PORT)
    })
})


