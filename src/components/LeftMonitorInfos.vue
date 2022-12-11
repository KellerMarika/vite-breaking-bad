<template>
  <div class="monitor-container row mt-5 me-5 ms-5">

    <div class="col-4">
      <legend class="info-controls-legend  ms-1">pokemon infos</legend>
      <fieldset class="info-controls-container rounded-4 me-3 px-4 py-2">


        <template v-for="(page, i ) in pages">

          <!-- ciclo crea bottoni switch page infos-->
          <label
              class="thumb fw-bold text-uppercase p-2 pb-1 my-3  mx-1 d-block text-center rounded-2 "
              :class="(activePage === page && store.toShow=== 'infos' )? 'active' : ''"
            
              
              @click="activePage = page">{{ page }}

            <input class="position-absolute visually-hidden" type="radio" name="active-page" id="active-page"
                :value="page">
          </label>

          <!-- bottoni controllo forma pokemon -->
          <div v-if="i === 0" class="pokemon-forms-controls">

            <div class="front_back-controls d-flex ">
              <label
                  class="thumb fw-bold text-capitalize d-block w-100 text-center"
                  :class="dataImg.front ? 'active' : ''"
                  @click="dataImg.front = true">front

                <input class="position-absolute visually-hidden" type="radio" name="active-page" id="active-page"
                    :value="page">
              </label>

              <label
                  class="thumb  fw-bold text-capitalize d-block w-100 text-center"
                  :class="!dataImg.front ? 'active' : ''"
                  @click="dataImg.front = false">back

                <input class="position-absolute visually-hidden" type="radio" name="active-page" id="active-page"
                    :value="page">
              </label>
            </div>

            <div class="default_shiny-controls position-relative d-flex">
              <label
                  class="thumb fw-bold text-capitalize d-block w-100 text-center"
                  :class="!dataImg.shiny ? 'active' : ''"
                  @click="dataImg.shiny = false">default

                <input class="position-absolute visually-hidden" type="radio" name="active-page" id="active-page"
                    :value="page">
              </label>

              <label
                  class="thumb  fw-bold text-capitalize d-block w-100 text-center"
                  :class="dataImg.shiny ? 'active' : ''"
                  @click="dataImg.shiny = true">shiny

                <input class="position-absolute visually-hidden" type="radio" name="active-page" id="active-page"
                    :value="page">
              </label>
            </div>

          </div>
        </template>
      </fieldset>
    </div>


    <div id="monitor-infos" class=" col-8 rounded-4  ">

      <template class="p-4"
          v-if="store.toShow === 'infos'">

        <div v-if="PokemonInfosSubject"

            class=" main-container h-100 p-4">


          <template
              v-for="(page, i) in pages"
              :class="page"
              :pokemonToShow="PokemonInfosSubject">

            <PokemonDataInfos
                v-if="(i === 0 && page === activePage)"
                :pokemonToShow="PokemonInfosSubject"
                :showPokemonImg="dataImg" />

            <PokemonStatInfos
                v-else-if="(i === 1 && page === activePage)"
                :pokemonToShow="PokemonInfosSubject" />

            <PokemonEvoIutionInfos
                v-else-if="(i === 2 && page === activePage)"
                :pokemonToShow="PokemonInfosSubject" />

          </template>
        </div>
        <div v-else></div>

      </template>

      <ShowFilterOptions
          v-else />

    </div>
  </div>
</template>
  
<script>
import ShowFilterOptions from './ShowFilterOptions.vue';
import PokemonDataInfos from "./PokemonDataInfos.vue";
import PokemonStatInfos from "./PokemonStatInfos.vue";
import PokemonEvoIutionInfos from "./PokemonEvoIutionInfos.vue"
import { store } from "../store/store";
export default {

  components: { ShowFilterOptions, PokemonDataInfos, PokemonStatInfos, PokemonEvoIutionInfos },
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
      store,
      pages: [
        "data",
        "stat",
        "evolutions",
      ],
      activePage: "data",
      dataImg: {
        front: true,
        shiny: false,
      },

    }
  },
  mounted() {
    console.log(this.pages)
  }
};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

/* MONITOR */

.info-controls-legend {
  transform: translateY(5px);
  color: rgb(182, 36, 114);
  text-shadow: 1px 1px 0px rgb(97, 6, 53);
}

fieldset {
  border: 2px inset rgba(255, 108, 186, 0.692);
}

#monitor-infos {
  height: 300px;

  background: rgb(175, 228, 175);
  background: radial-gradient(circle, rgba(175, 228, 175, 1) 0%, rgba(174, 226, 174, 1) 4%, rgba(149, 199, 149, 1) 75%, rgba(145, 156, 145, 1) 97%, rgba(119, 120, 119, 1) 100%);

  box-shadow: -1px 1px 10px 2px inset rgba(119, 120, 119, 1);
  border: 1px outset $bg_primary_color;
}

/* TUMBS */
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

  &:active,
  &.active {
    border-width: 3px 3px 3px 3px;
    border-style: inset;

    box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);
    background-color: rgb(81, 135, 216);
    color: rgb(210, 255, 138);
  }

}



/* BOttoni switch forms */
.pokemon-forms-controls {
  border-radius: 10px;
  margin: 6px;
  margin-top: -18px;
  background-color: #184491;

  .thumb {
    border-radius: 2px;
  }

  .front_back-controls {

    .thumb:first-child,
    .thumb:last-child {
      border-bottom: 0;
    }
  }

  .default_shiny-controls {
    border-radius: 4px;

    .thumb:first-child {
      border-bottom-left-radius: 5px;
    }

    .thumb:last-child {
      border-bottom-right-radius: 5px;
    }
  }

  .thumb:first-child {
    border-right: 0;
  }

  .thumb.active {
    border-style: inset;
    box-shadow: 5px 2px 5px 1px inset rgb(86, 107, 202);
    background-color: rgb(79, 135, 219);
    color: rgb(210, 255, 138);
    text-shadow: 2px 2px rgba(11, 76, 138, 0.808);
    font-weight: lighter;
  }
}
</style>