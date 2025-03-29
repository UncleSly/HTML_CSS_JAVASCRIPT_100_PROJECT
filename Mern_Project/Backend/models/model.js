const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        resp:{
            type: Number,
            required: true
        },
        load:{
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("user", UserSchema)

module.exports = User