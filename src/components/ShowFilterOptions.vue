<template>
  <div class="show-filter-options h-100 m-3">

    <h6 class="text-center fw-bold">Filter Pokemons</h6>

    <!-- types -->
    <div class="types d-flex flex-wrap">

      <span class="fw-bold" v-show="(store.filters.types.length > 0)">By Type: </span>
      <div class="type px-1"
          v-for="(typeChose, i) in store.filters.types">{{ typeChose }}</div>
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

</style>