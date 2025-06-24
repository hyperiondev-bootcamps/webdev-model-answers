// Array to store Pokemon data
let pokemon = [];

// Function to fetch Pokemon data
function fetchPokemon(pokemonName) {
  // Fetch data for the specified Pokemon
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    .then((response) => {
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      // Extract relevant data
      const { name, weight, abilities } = result;

      // Create an object with the Pokemon's data
      const pokemonData = {
        name: name,
        weight: weight,
        abilities: abilities.map((ability) => ability.ability.name),
      };

      // Add the Pokemon data to the array
      pokemon.push(pokemonData);

      // Log the updated array to the console
      console.log(pokemon);
    })
    .catch((error) => {
      // Handle errors and log the message
      console.error(`Failed to fetch Pokemon data: ${error.message}`);
    });
}

// Example usage: Fetch data for Magmar
fetchPokemon("magmar");
