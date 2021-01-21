const pokemon = require('../data/data')

function find() {
  // console.log(pokemon)
  return pokemon
}

function findById(id) {
  console.log(id)
  return pokemon.filter(pokemon => pokemon.id === Number(id))
}

module.exports = {
  find,
  findById,
}