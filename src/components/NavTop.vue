<template>
  <div class=" navbar-top p-3 flex-shrink-0 d-flex align-items-center gap-1 ">
  </div>
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

[class*="navbar"] {
  height: 90px;
  box-shadow: 0px 6px 8px 1px inset $bg_primary_color_dark;

  border-bottom: 1px solid rgb(179, 0, 89);
  background: rgb(209, 12, 118);
  background: linear-gradient(180deg, rgb(240, 234, 237) 5%, rgba(233, 38, 144, 1) 2%, rgb(233, 67, 158) 6%, rgba(233, 38, 144, 1) 89%, rgba(233, 38, 144, 1) 96%, rgba(182, 17, 106, 1) 100%);
}
</style>