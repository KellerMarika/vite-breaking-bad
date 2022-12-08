<template>
 

  <img v-if="(!store.filters.types.includes(type))" :src="`/${type}.png`" :alt="type" class="img-fluid">
  <img v-else :src="`/${type}-active.png`" :alt="type" class="img-fluid">

  <input class="position-absolute visually-hidden" type="checkbox" me="filterType" :id="type" :value="type"
      v-model="store.filters.types">
</template>

<script>
import { store } from "../store/store";
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
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