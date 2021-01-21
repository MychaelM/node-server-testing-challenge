const pokemon = require('../data/data')

function find() {
  // console.log(pokemon)
  return pokemon
}

function findById(id) {
  // console.log(id)
  const newPokemon = pokemon
  return newPokemon.filter(pokemon => pokemon.id === Number(id))
}

async function add(data) {
  await pokemon.push(data)

  console.log(pokemon)

  return findById(data.id)
}

module.exports = {
  find,
  findById,
  add,
}