// 1. definir los selectores
//window.alert(start);
const pokemonName = document.getElementsByClassName("pokemon_name");
const pokemonNumber = document.getElementsByClassName("pokemon_number");

const pokemonImage = document.getElementsByClassName("pokemon_image");
const form = document.getElementsByClassName("form");
const input = document.getElementsByClassName("input_search");

const buttonPrev = document.getElementsByClassName("anterior");
const buttonNext = document.getElementsByClassName("proximo");

let start = 1;

// ### 2. crear la función que consuma de la API de pokemon

const fetchPokemon = async (pokemonID) => {
  try {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonID);
    const data = await respuesta.json();

    return {
      id: data.id,
      nombre: data.name,
      imagen: data.sprites.front_default, // Corrección aquí
    };
  } catch (error) {
    console.error('Error al buscar el Pokémon:', error);
    throw error;
  }
  }

// ### 3. crear la función renderPokemon

const renderPokemon = async (pokemonID) => {
  pokemonName[0].innerHTML = "cargando...";
  pokemonNumber[0].innerHTML = "";
  const data = await fetchPokemon(pokemonID);

  if (data) {
    pokemonName.innerHTML = data.nombre;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data.imagen;
    // agregar la información obtenida en los campos pokemonName, pokemonNumber y pokemonImage

    input.value = "";
    start = data.id;
  } else {
    pokemonName.innerHTML = "pokemon no encontrado";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "./img/notFound.gif";
  }
};

// ### 4. agregar event listeners

form.addEventListener ('onfocus',function(){
  
});

buttonPrev.addEventListener ('click',function(){
  if (start>1) start--;
  renderPokemon(start);
}) ;

buttonNext.addEventListener ('click', function(){
  alert(start);
  start++;
  renderPokemon(start);
});
window.alert(start);
renderPokemon(start);
