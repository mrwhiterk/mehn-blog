const mongoose = require("../db/connection")

module.exports = {
  BlogPost: mongoose.model("BlogPost", require("./BlogPost")),
  User: mongoose.model("User", require("./user"))
}