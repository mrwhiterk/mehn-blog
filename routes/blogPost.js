const express = require("express");
const router = express.Router();
const blogPostController = require("../controllers/blogPost");

router.get("/", blogPostController.index);
router.post("/", blogPostController.create);
router.get("/new", blogPostController.new);
router.get("/:id", blogPostController.show);
router.put("/:id", blogPostController.update);
router.delete("/:id", blogPostController.delete);

module.exports = router;