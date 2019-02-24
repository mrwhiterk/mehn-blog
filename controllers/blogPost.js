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
  update: (req, res) => {
    let {
      title,
      content
    } = req.body;

    BlogPost.findOne({
      _id: req.params.id
    }).then(blogPost => {
      blogPost.title = title;
      blogPost.content = content

      blogPost.save(err => {
        res.redirect(`/blogPost/${blogPost._id}`)
      })
    })
  },
  delete: (req, res) => {
    BlogPost.findByIdAndRemove(req.params.id, (err, tasks) => {
      if (err) return res.status(500).send(err);

      return res.redirect(`/`)
    })
  }
}