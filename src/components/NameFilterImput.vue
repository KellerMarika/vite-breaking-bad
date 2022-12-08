<template>

  <label
      class="fw-bold d-block position-relative d-flex justify-content-center align-items-center text-uppercase"
      for="Name"
      :class="isActive ? 'active' : ''"
      @click="isActive ? isActive = false : isActive = true"> name

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
      isActive: false,
    };
  }
};
</script>

<style scoped lang="scss">

</style>