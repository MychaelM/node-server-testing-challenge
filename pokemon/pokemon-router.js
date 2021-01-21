const express = require('express')
const Pokemon = require('../pokemon/pokemon-model')

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await Pokemon.find())
  } catch(err) {
    next(err)
  }
})

module.exports = router