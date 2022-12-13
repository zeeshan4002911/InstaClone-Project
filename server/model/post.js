const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name: { type: String, required: true},
    location: { type: String, required: true},
    likes: { type: Number},
    description: { type: String, required: true},
    PostImage: { type: String, required: true},
    date: {type: Date, default: Date.now()}
})

module.exports = mongoose.model("posts", postSchema);                                   