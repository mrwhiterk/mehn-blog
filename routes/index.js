const express = require('express')
const router = express.Router();

router.use('/blogPost', require('./blogPost'))

router.all('*', (req, res) => {
  res.status(400).send()
})

module.exports = router