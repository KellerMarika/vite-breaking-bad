<template>
  <div v-if="pokemonToShow">{{ pokemonToShow.name}}</div>
<div v-else></div>

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

    };
  },

  methods: {
  }
}

</script>
  
<style scoped lang="scss">

</style>