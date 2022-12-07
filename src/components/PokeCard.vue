<template>

  <div class="poke-card w-100 d-flex adivgn-items-center  text-center ps-2">

    <div class="card-infos flex-fill pt-4 mx-3 h-100">
      <div class="info d-flex align-items-lg-baseline">
        <div class="number fs-1 fw-light">#001</div>
        <h2 class="name flex-fill text-capitalize fw-bold">bulbassaur</h2>


        <i class="fs-2 m-2 fa-regular fa-star"></i>
        <i class="fs-2 m-2 fa-solid fa-star d-none"></i>

        <i class="fs-2 m-2 fa-regular fa-circle"></i>
        <i class="fs-2 m-2 fa-regular fa-circle-check d-none"></i>

      </div>

      <div class="type row mx-5 mt-4 gap-1 justify-content-between">
        <div class="col text-uppercase rounded-3 fs-3  ">tipo</div>

      </div>
    </div>

    <div class="img-card-container">
      <img src="#" alt="pokeimg">
    </div>

  </div>

</template>

<script>
import { formToJSON } from "axios";
import { onRenderTracked } from "vue";
import { store } from "../store/store"
export default {
  props: {
    /**
     * parametri dell'oggetto pokemon
     *
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
     * 
     * oggetto che rappresenta un singolo pokemon:
     */

















    pokemon: {
      //specifico che tipologia è la prop che passo e se è essenziale (controllo in console)
      type: Object,
      required: true
    },
  },
  data() {
    return {
      store,
    };
  }
};
</script>

<style scoped lang="scss">
.poke-card {
  height: 200px;
  border-bottom: 1px solid grey;
  box-shadow: 0px 1px 5px 1px grey;


  .type * {
    background-color: rgba(26, 21, 14, 0.171);

  }

  .img-card-container {
    height: 100%;
    width: 250px;
    border-top-left-radius: 95px;
    border-bottom-left-radius: 95px;
    border-bottom: 1px solid grey;
    background-color: rgb(245, 245, 238);

    img {
      width: 100%;
      height: 100%;
    }
  }

  /*  & * {
    border: 1px solid red;
  }  */
}

;
</style>