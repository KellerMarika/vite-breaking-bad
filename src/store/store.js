import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  pokemonsList: [],
  pokedexAllPokemons: [],
  pokedex: [],
  pokemonsTypesList: [
    "dark",
  ],
  searchByIdIsActive: false,
  searchByNameIsActive: false,

  //oggetto del filtro
  filterOptions: {
    name: "",
    id: "",
    types: [],
    activeFilters: null,
  },
  toShow: "filters",
});

/* funzione genera intero pokedex */
export function fetchPokemonsList() {


  axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resp) => {

      /* array dei pokemon */
      store.pokemonsList = resp.data.results

      /* array di oggetti contenenti i dati di ciascun pokemon */
      store.pokemonsList.forEach(pokemon => {
        axios.get(pokemon.url)
          .then((resp) => {
            store.pokedexAllPokemons.push(resp.data)

            /* CICLO COLLEZIONA TIPO */
            resp.data.types.forEach(type => {
              if (!store.pokemonsTypesList.includes(type.type.name)) {
                store.pokemonsTypesList.push(type.type.name)
                //console.log(store.pokemonsTypesList)
              }

            })
          });
      });
      store.pokedex = store.pokedexAllPokemons
    });
}


