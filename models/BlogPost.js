const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const BlogPost = new Schema({
  title: String,
  content: String
}, {
  timestamps: true
})

module.exports = BlogPost;