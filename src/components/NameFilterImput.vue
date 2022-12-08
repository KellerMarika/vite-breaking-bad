<template>

  <label
      class="fw-bold d-block position-relative d-flex justify-content-center align-items-center text-uppercase"
      for="Name"
      :class="store.isearchByNameIsActive ? 'active' : ''"
      @click="store.isearchByNameIsActive ? store.isearchByNameIsActive = false : store.isearchByNameIsActive = true"> name

    <input class="position-absolute start-0 opacity-0 " type="text" v-model="store.filters.name">
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