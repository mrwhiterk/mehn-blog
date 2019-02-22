const express = require('express')
const app = express()
const hbs = require("hbs")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")


// const port = 4000
// const port =  

let HandlebarsIntl = require('handlebars-intl');
HandlebarsIntl.registerWith(hbs);

app.set("view engine", "hbs")

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.use(methodOverride("_method"))

app.use(require("./routes/blogPost.js"))

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  // console.log(`Server is up and running on ${app.get('port')}`)
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})