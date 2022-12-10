import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  pokemonsList: [],
  pokedex: [],
  filtredPokedex: [],
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
  },
  activeFilters: null,
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
            store.pokedex.push(resp.data)

            /* CICLO COLLEZIONA TIPO */
            resp.data.types.forEach(type => {
              if (!store.pokemonsTypesList.includes(type.type.name)) {
                store.pokemonsTypesList.push(type.type.name)
                //console.log(store.pokemonsTypesList)
              }
            })
          });
      });

    });

  /* problema col then il filtro funziona, ma dopo aggiunge comunque tutte le cards e voglio morire */

  if (store.activeFilters && store.pokedex.length === 151) {

    store.pokedex.forEach((pokemon) => {
      //console.log(pokemon.name, pokemon.id)
      //pokemon.types.forEach((type) => console.log(type.type.name));

      if (pokemon.id.toString().includes(store.activeFilters.id.toString()) &&
        pokemon.name.includes(store.activeFilters.name.toLowerCase())
        /* && pokemon.types.some(type => type.type.name === "grass") */
      ) {
        store.filtredPokedex.push(pokemon)
        console.log()
        console.log(pokemon.name, store.activeFilters.name, pokemon.id, store.activeFilters.id)

      }

    })
    return store.pokedex = store.filtredPokedex
  }
}


