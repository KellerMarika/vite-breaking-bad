<template>

 <!--  STAT-->
 <div class="stat text-center h-100 d-flex flex-row-reverse pt-3">
      <!-- ______________________________________D-none -->


      <!-- img -->
      <div class="img-container mt-5 me-4">
        <img :src="pokemonToShow.sprites.other['official-artwork'].front_default"
            :alt="pokemonToShow.name">
      </div>

      <!-- statistic -->
      <div class="text-start flex-fill">
        <h5 class="text-capitalize fw-bold flex-fill pb-2"> Base statistic</h5>

        <div v-for="statistic in pokemonToShow.stats">

          <div class="pb-1" :class="statistic.stat.name">
            <span class="fw-bold"> {{ statistic.stat.name }}:</span>
            <span class="px-1"> {{ statistic["base_stat"] }}</span>
          </div>

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
.main-container {
  border: 2px solid salmon;
}

.img-container {
  height: 60%;

  img {
    height: 110%;
    max-height: 100%;
  }
}
</style>