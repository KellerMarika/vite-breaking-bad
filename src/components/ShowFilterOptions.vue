<template>
  <div class="show-filter-options h-100 m-3">
    <h6 class="text-center fw-bold">Filter Pokemons</h6>

    <!-- id -->
    
    <div v-show="(store.searchByIdIsActive)" class="id-search">
      
      <span class="fw-bold" v-show="(store.searchByIdIsActive)">
        <i class="fa-solid fa-caret-right"></i>
        By id: </span>
      <span class="id px-1">{{store.searchByIdIsActive ? store.filters.id : ''}}</span>
    </div>


    <!-- name -->
    <div  v-show="(store.searchByNameIsActive)" class="name-search ">

      <span class="fw-bold" >
        <i class="fa-solid fa-caret-right"></i>
        By Name: </span>
      <span class="name px-1">{{store.filters.name}}</span>
    </div>

   <!-- types -->
    <!-- prende le prop da store -->
    <div class="types-search  d-flex flex-wrap">

<span class="fw-bold pe-2" v-show="(store.filters.types.length > 0)">
  <i class="fa-solid fa-caret-right"></i>
  By Type: </span>

<template v-for="(typeChose, i) in store.filters.types">

  <div v-if="(i === 0)" class="type ps-1">{{ typeChose }}</div>
  <div v-else> <span class="type px-1">, </span>{{ typeChose }}</div>

</template>
</div>
  </div>


</template>
 
<script>
import { store } from "../store/store";
export default {
  props: {

  },
  data() {
    return {
      store
    };
  }
};
</script>
 
<style scoped lang="scss">
* {
  border: 1px solid purple;
}
</style>