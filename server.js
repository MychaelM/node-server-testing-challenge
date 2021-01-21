const express = require("express")
const pokemonRouter = require('./pokemon/pokemon-router')

const server = express();

server.use(express.json())

server.use("/pokemon", pokemonRouter)

server.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the server"
  })
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something is terribly wrong friend"
  })
})

module.exports = server;