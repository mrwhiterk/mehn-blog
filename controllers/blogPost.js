const {
  BlogPost
} = require("../models/BlogPost")

module.exports = {

  index: (req, res) => {
    BlogPost.find({})
      .sort({
        createdAt: -1
      })
      .then(blogPosts => {
        res.render("index", {
          blogPosts
        })
      })
  },
  show: (req, res) => {
    res.send('blogPosts show page')
  }
}