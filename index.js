const express = require('express')
const app = express()
const hbs = require("hbs")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")

const port = 4000

app.set("view engine", "hbs")

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.use(methodOverride("_method"))

app.use(require("./routes/blogPost.js"))

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Server is up and running on ${port}`)
  }
})