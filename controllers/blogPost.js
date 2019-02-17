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
  },
  delete: (req, res) => {
    BlogPost.findByIdAndRemove(req.params.id, (err, tasks) => {
      if (err) return res.status(500).send(err);

      return res.redirect(`/`)
    })
  }
}