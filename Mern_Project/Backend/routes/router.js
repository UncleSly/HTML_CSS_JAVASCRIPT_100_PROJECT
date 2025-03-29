const route = require("express").Router()
const {home_get, workout_post, single_workout, update_workout, workout_delete} = require("../conrollers/controller")


route.get('/', home_get)
route.post("/", workout_post)
route.get('/:id', single_workout)
route.patch('/:id', update_workout)
route.delete('/:id', workout_delete)

module.exports = route;