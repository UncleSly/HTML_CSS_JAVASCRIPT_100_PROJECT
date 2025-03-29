import mongoose from "mongoose";
import iEmail from "validator";
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            validator:[iEmail.isEmail, 'Please use a valid email']
        }, 
        password:{
            type: String,
            required: [true, "Please provide a password"],
            minlength: [6, "Please character must be greater than 6"]
        },
        username: {
            type: String,
            required: [true, "Please provide a Username"],
            unique: true,
            maxlength:[10, "Character should not exceed 8"]
        }
    }
)

userSchema.pre('save', async function(){
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
} )

const User = mongoose.model('user', userSchema)

export default User;