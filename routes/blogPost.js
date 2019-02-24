const express = require("express");
const router = express.Router();
const blogPostController = require("../controllers/blogPost");

// router.get("/", blogPostController.index);
router.post("/blogPost", blogPostController.create);
router.get("/blogPost/new", blogPostController.new);
router.get("/blogPost/:id", blogPostController.show);
router.put("/blogPost/:id", blogPostController.update);
router.delete("/blogPost/:id", blogPostController.delete);

module.exports = router;