<template>

  <form class="form-container position-relative m-5" action="get" @submit.prevent="onSearchClick">


    <div class="thumbs-container w-100 row m-0">

      <NameFilterImput class="col name search-btn thumb "></NameFilterImput>

      <template
          v-for="(type, i) in store.pokemonsTypesList">


        <label
            class="col type thumb  d-flex position-relative rounded-2 d-flex justify-content-center align-items-center"
            :for="type">

          <TypesFilterOptions :key="type" :type="type"></TypesFilterOptions>
        </label>

        <IdFilterImput class="col id search-btn thumb " v-if="(i === (this.store.pokemonsTypesList.length + 2) / 2)">
        </IdFilterImput>

      </template>

      <button type="button"
          class=" submit search-btn thumb col fw-bold d-block position-relative d-flex justify-content-center align-items-center text-uppercase"
          @click="onSearchClick">
        Search
      </button>

    </div>
  </form>

</template>
  
<script>
import { store, fetchPokemonsList } from "../store/store";
import NameFilterImput from "./NameFilterImput.vue";
import IdFilterImput from "./IdFilterImput.vue";
import TypesFilterOptions from "./TypesFilterOptions.vue";

export default {

  components: { TypesFilterOptions, NameFilterImput, IdFilterImput },

  data() {
    return {
      store,
      pokedexFiltered: [],

    };
  },

  methods: {
    onSearchClick() {

      this.store.activeFilters = { ...this.store.filterOptions }

      //se il filtro attivo contiente delle condizioni
      if (this.store.activeFilters) {
        //reset
        this.store.pokedex=this.store.pokedexAllPokemons
        this.pokedexFiltered = []

        //ciclo sui pokemon del pokedex
        this.store.pokedex.forEach((pokemon) => {

          let checkPokemonincludedByType = false

          function filterByType() {
            pokemon.types.forEach (type =>{
              if (store.activeFilters.types.includes(type.type.name)||
              store.activeFilters.types.length===0) {
                //console.log("true")
                checkPokemonincludedByType = true
              }
            });
          }

          /* FILTRO */
          if (pokemon.id.toString().includes(this.store.activeFilters.id.toString()) &&
            pokemon.name.includes(this.store.activeFilters.name.toLowerCase())) {

            console.log(pokemon.name, pokemon.id)
            filterByType()

            console.log(checkPokemonincludedByType)

            if(checkPokemonincludedByType){

              this.pokedexFiltered.push(pokemon)
            }              
          }

        })
        return this.store.pokedex = this.pokedexFiltered
      }
    }
  }
}
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.type.thumb {
  aspect-ratio: 1/1;
  flex-basis: calc(100% / 14);
}

.name.search-btn {
  flex-basis: calc((100% / 14) *3);
  border-radius: 10px;
  border-top-left-radius: 20px 80px;
}

.id.search-btn {
  flex-basis: calc((100% / 14) *2);
  border-radius: 10px;
  border-bottom-left-radius: 20px 80px;
}

.submit.search-btn {
  flex-basis: calc((100% / 14) *5);
  border-radius: 5px;
  border-bottom-right-radius: 60px 60px;
}

form {
  .thumbs-container {
    width: 720;
    border-radius: 100%;
    z-index: 2;
    background-color: rgb(17, 62, 129);

    .thumb {

      color: #184491;
      border: 2px outset rgba(11, 76, 138, 0.808);
      background-color: rgb(87, 143, 228);
      box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);
      flex-grow: 0;

      &:hover {
        border-width: 3px 3px 3px 3px;
        border-style: inset;

        box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);
        background-color: rgb(81, 135, 216);
      }

      &:active {
        border-width: 3px 3px 3px 3px;
        border-style: inset;

        box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);
        background-color: rgb(81, 135, 216);
        color: rgb(210, 255, 138);
      }
    }

    .search-btn {

      &.active {
        color: rgb(210, 255, 138);
      }

      & input {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>