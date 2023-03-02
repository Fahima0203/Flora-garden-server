const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    plantName: String,
    image: String,
    desc: String
});


module.exports = ImageModel = mongoose.model("Image", notesSchema)