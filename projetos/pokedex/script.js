//vasriaveis globais
const pokemonName = document.querySelector(".pokemon_name");
const pokemonid = document.querySelector(".pokemon_number");
const pokemonimg = document.querySelector(".gif_pokemon");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button_P = document.querySelector(".btn-prev");
const button_N = document.querySelector(".btn-next");
let searchpokemon = 0;

//capturar dados API
const fatchpokemon = async (pokemon) => {
    const apiresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (apiresponse.status === 200) {
        const data = await apiresponse.json();
        return data;
    }
}
//renderizar dados pokemon
const renderpokemon = async (pokemon) => {

    const data = await fatchpokemon(pokemon);
    console.log(data);
    pokemonName.innerHTML = "...";
    pokemonid.innerHTML = "";

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonid.innerHTML = data.id;
        pokemonimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = "";
        searchpokemon = data.id
    }
    else {
        input.value = "";
        pokemonName.innerHTML = "não encontrado!"
        pokemonimg.src = "https://sm.ign.com/ign_br/screenshot/default/148387-missingno-pokemon-capa-1-article-cover-bd-1_4hhg.jpg";
    }
}
//procurar pokemon pelo input
form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderpokemon(input.value.toLowerCase());
});

//eventos dos botoes
button_P.addEventListener("click", () => {
    if (searchpokemon > 1) {
        searchpokemon -= 1;
        renderpokemon(searchpokemon);
    }
})

button_N.addEventListener("click", () => {
    searchpokemon += 1;
    renderpokemon(searchpokemon);
})
renderpokemon(1)
