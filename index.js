const express = require('express')
const app = express()

const port = 4000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(port, (err) => {
  console.log(`Server is up and running on ${port}`)
})