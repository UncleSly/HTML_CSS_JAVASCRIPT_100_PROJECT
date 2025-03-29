const User = require("../models/model")
const mongoose = require("mongoose")

const home_get = async(req, res) =>{
     try {
        const workout  = await User.find({}).sort({createdAt: -1})
        res.status(200).json(workout)
     } catch (error) {
        res.status(400).json({error: error.message})
     }
}


const workout_post = async (req, res) =>{
          const {title, resp, load } = req.body

         let emptyFields = []
         if(!title){
            emptyFields.push('title')
         }
         if(!resp){
            emptyFields.push('resp')
         }
         if(!load){
            emptyFields.push('load')
         }

         if(emptyFields.length > 0){
            return res.status(400).json({error: "please fill out empty field", emptyFields})
         }

       try {
        const workout =  await User.create({title, resp, load})  
        res.status(200).json(workout)  
       } catch (error) {
          res.status(400).json({error: error.message})
       }
}


const single_workout = async (req, res) => {
            const {id} = req.params
          try {
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({error: "Page not found"})
            }
            const workout =  await User.findById({_id:id})
            if(!workout){
                return res.status(404).json({error: "No such Workout"})
            }
            res.status(200).json(workout) 
          } catch (error) {
            res.status(400).json({error: error.message})
          }
}


const update_workout = async(req, res) =>{
     const {id} = req.params
     try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Page not found"})
        }
     const workout = await User.findByIdAndUpdate({_id:id}, {
        ...req.body
     })
        if(!workout){
            return res.status(404).json({error:"No such file to update"})
        }
        res.status(200).json(workout)

     } catch (error) {
        res.status(400).json({error: error.message})
     }
}



const workout_delete = async(req, res) =>{
     const {id} = req.params
     try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Page not found"})
        }
         const workout =  await User.findByIdAndDelete({_id: id})
         if(!workout){
            return res.status(404).json({error: "No such file to delete"})
         }
         res.status(200).json(workout)
     } catch (error) {
        res.status(400).json({error: error.message})
     }
}


module.exports = {
    home_get,
    workout_post,
    single_workout,
    update_workout,
    workout_delete
}