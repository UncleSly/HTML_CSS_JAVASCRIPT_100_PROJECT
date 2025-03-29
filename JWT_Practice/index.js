import express from "express"
import mongoose from "mongoose"
import {router} from "./routes/auth-routes.js"
import cookieParser from 'cookie-parser'
import {requireToken, checkUser} from "./middlewares/Jwt-middleware.js"
const app = express()
const PORT = process.env.PORT || 4000

//middleware
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(cookieParser())


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("db connected")
    app.listen(PORT, () => {
        console.log(`app running on port: ${PORT}`)
    })
})

//routes
app.use('*', checkUser)
app.use(router)
app.get('/', (req, res) =>{
    res.render('home')
})
app.get("/secondpage", requireToken,(req, res) => {
    res.render("secondpage")
})