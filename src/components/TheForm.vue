<template>
  <div class="form-container d-flex justify-content-end m-5">
    <form class="position relative d-flex w-100 justify-content-between gap-5" action="get">

      <div class="flex-fill me-5 justify-content-center text-center">
        <label class="get-type-btn flex-fill rounded-2 fw-bold d-block" for="SName" arial> search by name</label>
        <label class="get-type-btn flex-fill rounded-2 fw-bold d-block" for="SName" arial> search by name</label>
      </div>


      <div class="thumbs-container me-2 row ">

        <label class="col thumb d-flex position-relative rounded-2 d-flex justify-content-center align-items-center"
            v-for="(type) in this.store.pokemonsTypesList">

          <TypesFilterOptions :key="type" :type="type"></TypesFilterOptions>
        </label>
      </div>
    
    </form>
  </div>
</template>
  
<script>
import { store, fetchPokemonsList } from "../store/store";
import TypesFilterOptions from "./TypesFilterOptions.vue";

export default {

  components: { TypesFilterOptions },
  props: {

  },
  data() {
    return {
      store,
    };
  },

  methods: {
    sayYes() {
      console.log("yes")

    },
    sayNope() {
      console.log("nope")
    },
    setChecked() {
      console.log("IS CHECKED è: ", this.isChecked)
      if (this.isChecked === false) {

        return this.isChecked = true
      } else {
        return this.isChecked = false
      }
    }
  }
};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;
*{border: 1px solid yellow;}

form {
  .thumbs-container {
    width: 440px;
    background-color: rgb(17, 62, 129);
    border-radius: 80%;

    .thumb {
      aspect-ratio: 1/1;
      flex-basis: calc(100% /9);

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

      & {
        color: #184491;
        border: 2px outset rgba(11, 76, 138, 0.808);
        background-color: rgb(87, 143, 228);
        box-shadow: -5px -2px 5px 1px inset rgb(87, 114, 231);
      }
    }
  }
}
</style>