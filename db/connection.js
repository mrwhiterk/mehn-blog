const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/Blog")

mongoose.Promise = Promise;
module.exports = mongoose;