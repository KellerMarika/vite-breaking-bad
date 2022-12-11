<template>
  <div class="monitor-container row m-5">

    <div class="col-3">

      <div class="info-controls-container mt-5 me-2">
        <button class="thumb rounded-2 fw-bold text-capitalize p-2 my-3 d-block w-100" type="button">data</button>
        <button class="thumb rounded-2 fw-bold text-capitalize p-2 my-3 d-block w-100" type="button">stat</button>
        <button class="thumb rounded-2 fw-bold text-capitalize p-2 my-3 d-block w-100" type="button">evolutions</button>
        <button class="thumb rounded-2 fw-bold text-capitalize p-2 my-3 d-block w-100" type="button">were to find</button>


      </div>

    </div>

    <div id="monitor-infos" class=" col-9 rounded-4">

      <ShowPokemonInfo
      :pokemonToShow="PokemonInfosSubject"
          v-if="store.toShow === 'infos'" />

      <ShowFilterOptions      
          v-else />

    </div>
  </div>
</template>
  
<script>
import ShowFilterOptions from './ShowFilterOptions.vue';
import ShowPokemonInfo from './ShowPokemonInfo.vue';
import { store } from "../store/store";
export default {
  props: {
    /**
     * parametri dell'oggetto pokemon
     * @param {number} id
     * @param {string} name
     * @param {array} types
     * @param {array} species 
     * @param {array} forms
     * @param {array} is_default
     * @param {string} location_area_encounters
     * @param {array} height
     * @param {array} weight
     * @param {array} moves
     * @param {array} abilities
     * @param {array} sprites
     * @param {array} stats 
     * @param {number} base_experience
     * @param {array} game-indices
     * @param {number} order
     * @param {array} held-items
     * @param {array} past_types
     * oggetto che rappresenta un singolo pokemon:
     */
    PokemonInfosSubject: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      store
    };
  },
  components: { ShowFilterOptions, ShowPokemonInfo }
};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.monitor-container {
  border: 1px solid blueviolet;
}

#monitor-infos {
  height: 300px;

  background: rgb(175, 228, 175);
  background: radial-gradient(circle, rgba(175, 228, 175, 1) 0%, rgba(174, 226, 174, 1) 4%, rgba(149, 199, 149, 1) 75%, rgba(145, 156, 145, 1) 97%, rgba(119, 120, 119, 1) 100%);

  box-shadow: -1px 1px 10px 2px inset rgba(119, 120, 119, 1);
  border: 1px outset $bg_primary_color;


}

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
</style>