<template>

  <label
      class=" fw-bold d-block position-relative d-flex justify-content-center align-items-center text-uppercase"
      for="id"

      :class="store.searchByIdIsActive ? 'active' : ''"
      @click="store.searchByIdIsActive ? (store.searchByIdIsActive = false , store.filters.id='') : store.searchByIdIsActive = true">id
    <input class="position-absolute start-0 opacity-0" type="number" name="id" id="id" v-model="store.filters.id">
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