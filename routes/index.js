const express = require("express")
const router = express.Router()
const {
  BlogPost
} = require("../models/index")

const authenticatedUser = require('../utils/authenticatedUser')

router.get('/', (req, res) => {
  BlogPost.find({})
    .sort({
      createdAt: -1
    })
    .then(blogPosts => {
      res.render('index', {
        blogPosts,
        success: req.flash("success")
      })
    })
})

router.use(require('./user'))
router.use("/blogPost", require('./blogPost.js'))

module.exports = router