<template>

  <label
      class="fw-bold d-block position-relative d-flex justify-content-center align-items-center text-uppercase"
      for="name"
      :class="store.searchByNameIsActive ? 'active' : ''"
      @click="store.searchByNameIsActive ? (store.searchByNameIsActive = false , store.filters.name=''): store.searchByNameIsActive = true"> name

    <input class="position-absolute start-0 opacity-0 " type="text" name="name" id="name" v-model="store.filters.name">
  </label>

  
</template>

<script>
import { store } from "../store/store";
export default {
  props: {
  },
  data() {
    return {
      store,
    };
  }
};
</script>

<style scoped lang="scss">

</style>