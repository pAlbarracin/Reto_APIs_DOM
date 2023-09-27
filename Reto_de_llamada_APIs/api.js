// 1. Obtener información de un Pokemón

async function obtenerPokemon(id) {
  const respuesta =  await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const data =  await respuesta.json()
  return {
    id : data.id,
    nombre : data.name,
    tipos : data.types,
    imagen : data.sprites.front_default,
  };
}

obtenerPokemon(1);

// 2. Obtener información de los primeros 20 Pokemón

async function obtenerTodosPokemones() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  const data =  await respuesta.json()
  return data.results;
}

obtenerTodosPokemones();

// ### 3. Obtener información del tipo de Pokemón

async function obtenerTipo(tipo) {
  const respuesta = await fetch("https://pokeapi.co/api/v2/type/"+tipo)
  const data =  await respuesta.json()
  return data.pokemon.map ((data) => data.pokemon)
}

obtenerTipo("dragon");

// ### 4. Obtener información de la habilidad Pokemón

async function obtenerHabilidadPokemon(idHabilidad) {
  const respuesta = await fetch("https://pokeapi.co/api/v2/ability/" + idHabilidad)
  const data =  await respuesta.json()
  return {
    nombre : data.name,
    id : data.id,
    pokemones : data.pokemon.map ((data) => data.pokemon.name)
  }
}

obtenerHabilidadPokemon("1");

// ## 5. Obtener información de la region de un Pokemón

async function obtenerRegionPokemon(id) {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+id)
  const data_pokemon =  await respuesta.json()
  const respuesta_location_area = await fetch(data_pokemon.location_area_encounters)
  const data_location =  await respuesta_location_area.json()
  return{
    id : data_pokemon.id,
    nombre : data_pokemon.name,
    imagen : data_pokemon.sprites.front_default,
    region : data_location.map((region) => region.location_area.name),
  };
}

obtenerRegionPokemon("1");

// aca se exportan todas las funciones para realizar el testing sobre tu solución
export {
  obtenerPokemon,
  obtenerTodosPokemones,
  obtenerTipo,
  obtenerHabilidadPokemon,
  obtenerRegionPokemon,
};
