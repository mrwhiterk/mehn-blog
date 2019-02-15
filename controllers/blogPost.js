const {
  BlogPost
} = require("../models/blogPost")

module.exports = {
  index: (req, res) => {
    res.send('list of blogPosts')
  },
  show: (req, res) => {
    res.send('blogPosts show page')
  }
}