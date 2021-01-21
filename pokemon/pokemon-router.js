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

router.get("/:id", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id)

    res.status(200).json(pokemon)
  } catch(err) {
    next(err)
  }
})

module.exports = router