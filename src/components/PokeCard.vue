<template>

  <div class="poke-card w-100 d-flex adivgn-items-center  text-center ps-2">
  <!--   v-for="(typesList) in pokemon.types"
  :class="typesList.type.name" -->
    <div class="card-infos flex-fill pt-2 mx-3 h-100">
      <div class="info d-flex align-items-lg-baseline">
        <div class="number fs-1 fw-light">{{ `#${this.addZero(pokemon.id)}` }}</div>
        <h2 class="name flex-fill text-capitalize fw-bold">{{ pokemon.name }}</h2>
    <!--     <div>{{`${this.fetchPokemonImg(pokemon.sprites.other.official-artwork.front_default)}`}}</div> --> 

        <i class="fs-2 m-2 fa-regular fa-star"></i>
        <i class="fs-2 m-2 fa-solid fa-star d-none"></i>

        <i class="fs-2 m-2 fa-regular fa-circle"></i>
        <i class="fs-2 m-2 fa-regular fa-circle-check d-none"></i>

      </div>

      <div class="type row gap-3 mx-3 mt-4 justify-content-between ">
        <div class="col text-uppercase rounded-3 fs-3"
            v-for="(typesList) in pokemon.types">{{ typesList.type.name }}</div>

      </div>
    </div>

    <div class="img-card-container">
      <img class="img-fluid" :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.name">
    </div>

  </div>

</template>

<script>
import { store} from "../store/store"

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
  },
  methods: {

    /* FUNZIONE FORMATA NUMERI A 3 CIFRE (001|010|100) */
    addZero(n) {
      return (n < 10 ? '00' : n < 100 ? '0' : '') + n;
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
.poke-card {
  height: 150px;
  border-bottom: 1px solid grey;
  box-shadow: 0px 1px 5px 1px grey;


  .type * {
    background-color: rgba(26, 21, 14, 0.171);

  }

  .img-card-container {
    height: 100%;
    width: 220px;
    border-top-left-radius: 95px;
    border-bottom-left-radius: 95px;
    border-bottom: 1px solid grey;
    background-color: rgba(255, 255, 255, 0.781);

    img{
      width:65%;
    }
  }
}
;
</style>