<template>
  <div class="form-container d-flex justify-content-end m-5">
    <form class="position relative d-flex w-100 justify-content-between gap-5" action="get">

      <div class="search-btns-contaner flex-fill text-center">


        <NameFilterImput></NameFilterImput>
        <IdFilterImput></IdFilterImput>
      </div>

      <!-- types -->
      <div class="thumbs-container me-2 row ">

        <label class="col thumb d-flex position-relative rounded-2 d-flex justify-content-center align-items-center"
            v-for="(type, i) in this.store.pokemonsTypesList"
            :for="type">

          <TypesFilterOptions :key="type" :type="type"></TypesFilterOptions>
        </label>

      </div>


      <!-- __________________________________________________________________________________________ -->
     
   <!--    <h2>try</h2>
      <div class="thumbs-container me-2 row ">

        <div class="col"></div>
        v-if="(i === this.store.pokemonsTypesList.length / 2)"




        <label class="col thumb d-flex position-relative rounded-2 d-flex justify-content-center align-items-center"
            v-for="(type, i) in this.store.pokemonsTypesList"
            :for="type">

          <TypesFilterOptions :key="type" :type="type"></TypesFilterOptions>

        </label>
        <IdFilterImput v-if="(i === this.store.pokemonsTypesList.length / 2)"></IdFilterImput>
      </div>
 -->

    </form>
  </div>
</template>
  
<script>
import { store, fetchPokemonsList } from "../store/store";
import NameFilterImput from "./NameFilterImput.vue";
import IdFilterImput from "./IdFilterImput.vue";
import TypesFilterOptions from "./TypesFilterOptions.vue";

export default {

  components: { TypesFilterOptions, NameFilterImput, IdFilterImput },
  props: {

  },
  data() {
    return {
      store,
      isActive: false
    };
  },

  methods: {
  }
};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

* {
  border: 1px solid yellow;
}

form {
  .thumbs-container {
    width: 440px;
    background-color: rgb(17, 62, 129);
    border-radius: 80%;

    .thumb {
      aspect-ratio: 1/1;
      flex-basis: calc(100% /9);
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

      &:active {
        border-width: 3px 3px 3px 3px;
        border-style: inset;

        box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);
        background-color: rgb(81, 135, 216);
        color: rgb(210, 255, 138);
      }


    }
  }
}
</style>