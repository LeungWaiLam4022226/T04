const pokedex = document.getElementById("pokemons");

const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 20; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const innerHTML = pokemon.map((pokem0n) => `
        <div class = 'card'>         
        <p class="pid">${pokem0n.id}</p>          
        <img src="${pokem0n.image}"/>
         <p class="name">${pokem0n.name}</p>
         <p class="type">${pokem0n.type}</p>
        </div>
    `).join("");
  pokedex.innerHTML = innerHTML;

};

fetchPokemon();
