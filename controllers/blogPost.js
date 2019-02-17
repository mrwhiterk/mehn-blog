const {
  BlogPost
} = require("../models/BlogPost")

module.exports = {
  index: (req, res) => {
    BlogPost.find({}).exec(function (err, post) {

      if (err) {
        console.log(err);
      } else {
        res.send(post)
      }
    })

  },
  show: (req, res) => {
    res.send('blogPosts show page')
  }
}