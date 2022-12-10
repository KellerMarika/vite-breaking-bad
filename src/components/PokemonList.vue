<template>

  <ul id="pokemon-list" class="flex-fill overflow-auto rounded-4 m-5 p-0">

    <!-- ciiclo sull'array pokedex e passo le prop -->
    <li class="poke-card-container text-center m-2 rounded-3 overflow-hidden "
        :data-pokemon="(pokemon.name + '.' + index)"

        v-for="(pokemon, index) in this.store.pokedex"

        @click="onClick(pokemon)">
      <!-- emit trigger evento personalizzato__________________________________________ -->


      <PokeCard :pokemon="pokemon" :index="index" :key="(pokemon.name + '.' + index)"></PokeCard>

    </li>

  </ul>

</template>

<script>
import PokeCard from './PokeCard.vue';
import { store, fetchPokemonsList } from "../store/store";


export default {

  components: { PokeCard },
  data() {
    return {
      store,
    };
  },
  created() {
    fetchPokemonsList()

  },
  methods: {
    onClick(clickedPokemonCard) {

      this.$emit("toActiveCard",clickedPokemonCard)

    }
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

/* ul {
  border-left: 10px double rgba(209, 12, 118, 1);
}
 */
ul {
  background: rgb(175, 228, 175);
  background: radial-gradient(circle, rgba(175, 228, 175, 1) 0%, rgba(174, 226, 174, 1) 4%, rgba(149, 199, 149, 1) 75%, rgba(145, 156, 145, 1) 97%, rgba(119, 120, 119, 1) 100%);


  box-shadow: -1px 1px 10px 2px inset rgba(119, 120, 119, 1);
  border: 1px outset $bg_primary_color;

  li {
    border: 1px outset rgba(118, 145, 118, 0.822);
    box-shadow: 0px 3px 5px 1px rgba(119, 120, 119, 1);
    /*  background: radial-gradient(circle, rgba(175, 228, 175, 1) 0%, rgba(174, 226, 174, 1) 4%, rgba(149, 199, 149, 1) 75%, rgba(145, 156, 145, 1) 97%, rgba(119, 120, 119, 1) 100%); */

  }
}
</style>