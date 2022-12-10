<template>
  <div class="show-filter-options h-100 m-3 py-3">
    <h6 class="text-center fw-bold pb-4">Filter Pokemons</h6>

    <!-- id -->

    <div v-show="(store.searchByIdIsActive)" class="id-search pb-2">

      <span class="fw-bold" v-show="(store.searchByIdIsActive)">
        <i class="fa-solid fa-caret-right"></i>
        By id: </span>
      <span class="id px-1">{{ store.searchByIdIsActive ? store.filterOptions.id : '' }}</span>
    </div>


    <!-- name -->
    <div v-show="(store.searchByNameIsActive)" class="name-search pb-2">

      <span class="fw-bold">
        <i class="fa-solid fa-caret-right"></i>
        By Name: </span>
      <span class="name px-1">{{ store.filterOptions.name }}</span>
    </div>

    <!-- types -->
    <!-- prende le prop da store -->
    <div class="types-search  d-flex flex-wrap pb-3">

      <span class="fw-bold pe-2" v-show="(store.filterOptions.types.length > 0)">
        <i class="fa-solid fa-caret-right"></i>
        By Type: </span>

      <template v-for="(typeChose, i) in store.filterOptions.types">

        <div v-if="(i === 0)" class="type ps-1">{{ typeChose }}</div>
        <div v-else> <span class="type px-1">, </span>{{ typeChose }}</div>

      </template>
    </div>

    <div class="show-result text-center m-2 mt-4 " v-show="(store.pokedex !== store.pokedexAllPokemons)">
      <span class="fw-bold text-capitalize" >

        You find: </span>
      <span class="filtred-pokemon-number px-1">{{ store.pokedex.length}}</span> <span> {{ store.pokedex.length===1 ? "pokèmon" : 'pokèmons'}} !</span> 

    </div>

  </div>


</template>
 
<script>
import { store } from "../store/store";
export default {
  data() {
    return {
      store
    };
  }
};
</script>
 
<style scoped lang="scss">

</style>