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
    BlogPost.findOne({
        _id: req.params.id
      })
      .exec(function (err, blogPost) {
        res.render("show", {
          blogPost
        })
      })
  },
  create: (req, res) => {
    BlogPost.create({
      title: req.body.blogPost.title,
      content: req.body.blogPost.content
    }).then(_ => {
      res.redirect("/")
    })
  },
  new: (req, res) => {
    res.render("new")
  },
  delete: (req, res) => {
    BlogPost.findByIdAndRemove(req.params.id, (err, tasks) => {
      if (err) return res.status(500).send(err);

      return res.redirect(`/`)
    })
  }
}