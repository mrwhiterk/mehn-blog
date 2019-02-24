const express = require("express")
const router = express.Router()
const {
  BlogPost
} = require("../models/index")
const authenticatedUser = require('../utils/authenticatedUser')

router.get('/', (req, res) => {
  BlogPost.find({})
    .then(posts => {
      res.render('index', {
        posts,
        success: req.flash('success')
      })
    })
})

router.use(require('./user'))
router.use('/blogPost', authenticatedUser, require('./blogPost.js'))

module.exports = router