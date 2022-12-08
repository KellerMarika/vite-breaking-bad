<template>
  <label
      class="search-btn rounded-2 fw-bold d-block position-relative d-flex justify-content-center align-items-center "
      for="SName"

      :class="isActive ? 'active' : ''"
      @click="isActive ? isActive = false : isActive = true"> search by id
    <input class="position-absolute start-0 opacity-0" type="number" v-model="store.filters.id">
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
  .search-btn {

height: 50%;
color: #184491;
border: 2px outset rgba(11, 76, 138, 0.808);
background-color: rgb(87, 143, 228);
box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);

&:hover {
      border-width: 3px 3px 3px 3px;
      border-style: inset;

      box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);
      background-color: rgb(81, 135, 216);
    }

    &.active {
      color: rgb(210, 255, 138);
    }

    & input {
      width: 100%;
      height: 100%;
    }

  }

</style>