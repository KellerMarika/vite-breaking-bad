<template>
  <!-- EVOLUTIONS -->

  <div class="h-100">
    <div class="row h-100">
      <div class="col"></div>
    </div>

  </div>


</template>
 
<script>
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
    pokemonToShow: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      store,
      dataImg: {
        front: true,
        shiny: false
      },


    };
  },

  methods: {
  },
  mounted() {

  }
}

</script>
 
<style scoped lang="scss">
.main-container {
  border: 2px solid salmon;
}
</style>