import User from "../models/user.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



const handleErrors = (err)=>{
    const errors = {email: "", password:"", username: ""}
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message
        })
    }
    if(err.code === 11000){
       Object.keys(err.keyPattern).forEach(key =>{
        errors[key] = `the ${key} already exist`
        return errors
       })
        
    }
    if(err.message ==="incorrect password"){
        errors.password = "Password is incorrect"
        return errors
    }
    if (err.message ==="Email not found"){
        errors.email = "Email not found"
        return errors
    }
    return errors
}



const maxAge = 3 * 24 * 60 * 60
const createToken = (id) =>{
       return jwt.sign({id}, process.env.SECRETE_JWT, {
        expiresIn: maxAge
       })
}


const signup_get = (req, res) =>{
    res.render('signup')
}

const signup_post = async(req, res) => {
      const {email, password, username} = req.body
      try {
        const user = await User.create({
            email, password, username
          })
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).json({user: user})

      } catch (error) {
            const err =  handleErrors(error)
            res.status(400).json({errors: err})

      }
}

const login_get = (req, res) => {
    res.render('login')
}

const login_post = async (req, res) =>{
    const {email, password} = req.body
       try {
          const user = await User.findOne({email})
          if(user){
              const auth = await bcrypt.compare(password, user.password)
              if(auth){
                const token = createToken(user._id)
                res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
                res.status(200).json({user: user})
              }else{
                throw Error("incorrect password")
              }
          }else{
            throw Error("Email not found")
          }
            
       } catch (error) {
        const err =  handleErrors(error)
        res.status(400).json({errors: err})
       }
}

const logout = (req, res)=>{
      res.cookie("jwt", '', {maxAge: 1})
      res.redirect('/')
}

export {
    signup_get,
    signup_post,
    login_get,
    login_post,
    logout
}