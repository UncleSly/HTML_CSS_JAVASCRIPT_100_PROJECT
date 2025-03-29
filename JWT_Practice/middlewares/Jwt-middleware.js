import jwt from "jsonwebtoken"
import User from "../models/user.js"

const requireToken = (req, res, next) =>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, process.env.SECRETE_JWT, (err, decodedToken)=>{
           if(err){
            res.redirect('/login')
           }else{
            next()
           }
        })
    }else{
        res.redirect("/login")
    }
}

const checkUser = (req, res, next) => {
   const token = req.cookies.jwt
    if(token){
        jwt.verify(token, process.env.SECRETE_JWT, (err, decodedToken)=>{
            if(err){
             res.locals.user = null
             next()
            }else{
             const user = User.findById(decodedToken._id)
             res.locals.user = user
             next()
            }
         })

    }else{
        res.locals.user = null
        next()
    }
}

export  {requireToken, checkUser}