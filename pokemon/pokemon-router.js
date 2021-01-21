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

      if (!pokemon) {
        return res.status(404).json({
          message: "A pokemon with this id does not exist",
        });
      }

    res.status(200).json(pokemon)
  } catch(err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.add(req.body)
    res.status(201).json(pokemon)
  } catch(err) {
    next(err)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    await Pokemon.remove(req.params.id)

    res.status(204).end()
  } catch(err) {
    next(err)
  }
})

module.exports = router