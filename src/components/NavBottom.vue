<template>
  <div class="navbar-bottom p-2 d-flex justify-content-between align-items-center  position-relative">
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
  background-color: var(--secondary_color_light);
  flex-shrink: 0;
  box-shadow: 5px 0px 10px 3px inset  $bg_primary_color_dark;
  border-bottom: 1px solid rgb(179, 0, 89);
   background: rgb(209, 12, 118);
  background: linear-gradient(180deg, rgb(253, 28, 141) 5%, rgba(233, 38, 144, 1) 2%, rgb(228, 33, 140) 6%, rgb(236, 57, 156) 89%, rgb(209, 52, 138) 96%, rgb(189, 0, 101) 100%);
 
}
</style>