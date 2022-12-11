<template>

    <!-- DATA -->
    <div class="text-center h-100">

      <div class="name_id-container position-relative pb-2">
        <!-- name -->
        <h3 class="text-capitalize fw-bold flex-fill"> {{ pokemonToShow.name }}</h3>

        <!-- id -->
        <h5 class="position-absolute top-0 end-0 mt-1"> <span class="fw-bold">ID:</span> {{ pokemonToShow.id }}</h5>
      </div>

      <!-- img -->
      <div class="img-container">
        <img v-if="dataImg.front && !dataImg.shiny"

            :src="pokemonToShow.sprites.front_default"
            :alt="pokemonToShow.name">

        <img v-else-if="dataImg.front && dataImg.shiny"
            :src="pokemonToShow.sprites.front_shiny"
            :alt="pokemonToShow.name">

        <img v-else-if="!dataImg.front && !dataImg.shiny"
            :src="pokemonToShow.sprites.back_default"
            :alt="pokemonToShow.name">
        <img v-else :src="pokemonToShow.sprites.back_shiny"
            :alt="pokemonToShow.name">

      </div>

      <div class="d-flex pt-4 gap-2 justify-content-around">
        <!-- height -->
        <div class="height pb-2">
          <span class="fw-bold"> height:</span>
          <span class="px-1">{{ pokemonToShow.height }}</span>
        </div>
        <!-- width -->
        <div class=" weight pb-2">
          <span class="fw-bold"> weight:</span>
          <span class="px-1">{{ pokemonToShow.weight }}</span>
        </div>

        <!-- type -->
        <div class="type pb-2">
          <span class="fw-bold px-1"> type:</span>

          <span class="type justify-content-between "
              v-for="(typesList, i) in pokemonToShow.types">

            {{ typesList.type.name }}
            <span v-if="pokemonToShow.types.length > 1 && i === 0">/</span>
          </span>
        </div>
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
    /**
    * contiene il nome della pagina da attivare
    */
    activePage: {
      type: String,
      required: true,
    },

    /**
    * contiene un array coi nomi delle pagine
    */
    activePage: {
      type: Array,
      required: true,
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

</style>