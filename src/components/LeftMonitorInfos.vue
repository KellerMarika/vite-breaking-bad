<template>

  <div id="monitor-infos" class=" position-relative rounded-4 m-5">

    <!-- componente pokemon Infos -->
    <ShowPokemonInfo></ShowPokemonInfo>

    <!-- componente form Infos -->

    <ShowFilterOptions></ShowFilterOptions>
  </div>

</template>
  
<script>
import ShowFilterOptions from './ShowFilterOptions.vue';
import ShowPokemonInfo from './ShowPokemonInfo.vue';
export default {
    props: {},
    data() {
        return {};
    },
    components: { ShowFilterOptions, ShowPokemonInfo }
};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

#monitor-infos {
  width: 450px;
  height: 300px;
   left: 60%;
 transform: translateX(-50%); 

  background: rgb(175, 228, 175);
  background: radial-gradient(circle, rgba(175, 228, 175, 1) 0%, rgba(174, 226, 174, 1) 4%, rgba(149, 199, 149, 1) 75%, rgba(145, 156, 145, 1) 97%, rgba(119, 120, 119, 1) 100%);

  box-shadow: -1px 1px 10px 2px inset rgba(119, 120, 119, 1);
  border: 1px outset $bg_primary_color;


}
</style>