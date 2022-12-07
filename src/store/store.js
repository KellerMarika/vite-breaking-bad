import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  pokemonsList: [],
  pokedex: [],
  pokemonsTypesList: [],

});

/* FUNZIONE POPOLA POKEDEX (LISTA POKEMON) */
export function fetchPokemonsList() {

  axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resp) => {

      /* array dei pokemon */
      store.pokemonsList = resp.data.results
      //console.log("pokemonsList", store.pokemonsList)
      //console.log("pokemonsList", store.pokemonsList[0].url)


      /* array di oggetti contenenti i dati di ciascun pokemon */
      store.pokemonsList.forEach(pokemon => {
        axios.get(pokemon.url)
          .then((resp) => {
            //console.log("resp.data: ", resp.data)

            /* CICLO COLLEZIONA TIPO */

            resp.data.types.forEach(type => {
              if (!store.pokemonsTypesList.includes(type.type.name)) {
                store.pokemonsTypesList.push(type.type.name)
                console.log(store.pokemonsTypesList)
              }
            })

            store.pokedex.push(resp.data)
            //console.log(store.pokedex)


          });
      });

    });
};

/* FUNZIONE FILTRO */
/* 
export function getTypesList() {
  const typesList = [];

  store.pokedex.forEach(pokemon => {
    // se la categoria dell'pokemono attuale NON è già inclusa nell'array 
    // typesList, allora la pusho.
    if (!typesList.includes(pokemon.category)) {
      typesList.push(pokemon.category);
    }
  });
 */
/*   return typesList;
}
 */






