// get data from database
// link up routes in controller
// render data with hbs

const express = require('express')
const app = express()


const port = 4000

app.set("view engine", "hbs")

app.use(express.static('public'))

app.use(require("./routes/blogPost.js"))

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Server is up and running on ${port}`)
  }
})