const express = require("express")

const server = express();

server.use(express.json())

server.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the server"
  })
})

module.exports = server;