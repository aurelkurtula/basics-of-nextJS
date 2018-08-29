const mongoose = require('mongoose')
const schema = mongoose.Schema

const photoModel = new schema({
    tagline: { type: String} ,
    image: { type: String},
    likes: { type: String},
    comments: { type: Array, default: [] }
})

module.exports = mongoose.model('photos', photoModel)