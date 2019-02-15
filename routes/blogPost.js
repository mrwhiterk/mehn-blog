const express = require("express")
const router = express.Router()
const blogPostController = require("../controllers/blogPost")

router.get("/show", blogPostController.show)

module.exports = router