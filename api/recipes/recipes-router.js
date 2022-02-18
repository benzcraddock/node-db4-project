const express = require('express')
const Recipe = require('./recipes-model')

const router = express.Router()

// http :9000/api/recipes
router.use('*', (req, res) => {
  res.json({
    api: 'up'
  })
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'something went wrong inside the recipes router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router
