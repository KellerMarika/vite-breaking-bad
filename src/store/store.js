import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  pokemonsList:[],
  pokedex: [],

});

/* FUNZIONE POPOLA POKEDEX (LISTA POKEMON) */
export function fetchPokemonsList() {

  axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resp) => {

      /* array dei pokemon */
      store.pokemonsList = resp.data.results
      //console.log("pokemonsList", store.pokemonsList)
      console.log("pokemonsList", store.pokemonsList[0].url)


      /* array di oggetti contenenti i dati di ciascun pokemon */
      store.pokemonsList.forEach(pokemon => {
        axios.get(pokemon.url)
          .then((resp) => {
            //console.log("resp.data: ", resp.data)
            store.pokedex=resp.data
            //console.log(store.pokedex)
          });
      });

    });
}

