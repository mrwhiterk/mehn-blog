const {
  BlogPost
} = require("../models/BlogPost")

module.exports = {
  index: (req, res) => {
    BlogPost.find({}).exec(function (err, post) {

      if (err) {
        console.log('err')
        res.send(err)

      } else {
        console.log('post')
        res.send(post)
      }
    })
    // BlogPost.find({})
    //   .then(blogs => res.send(blogs))
  },
  show: (req, res) => {
    res.send('blogPosts show page')
  }
}