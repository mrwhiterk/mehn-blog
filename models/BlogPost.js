const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const BlogPost = new Schema({
  title: String,
  // createdAt: {
  //   type: Date,
  //   default: Date.now()
  // },
  content: String
}, {
  timestamps: true
})

module.exports = {
  BlogPost: mongoose.model("BlogPost", BlogPost)
}