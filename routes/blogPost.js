const express = require("express");
const router = express.Router();
const blogPostController = require("../controllers/blogPost");

router.get("/", blogPostController.index);
router.get("/:id", blogPostController.show);
router.delete("/:id", blogPostController.delete);

module.exports = router;
