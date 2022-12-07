<template>
  <div class="form-container d-flex justify-content-center m-5">
    <form class="position relative " action="get">






      <div class="types-btn-container px-3 d-flex justify-content-end">
        <div class="thumbs-container row row-cols-5">


          <label class="col thumb d-flex position-relative rounded-2 d-flex justify-content-center align-items-center"
              v-for="(type) in this.store.pokemonsTypesList"
              :for="type">{{ type }}
            <input class="position-absolute opacity-0" type="radio" id="type" :name="filterType" :value="type">

          </label>
          <button class="flex-fill rounded-2"> Submit</button>
        </div>

      </div>


    </form>
  </div>
</template>
  
<script>
import { store, fetchPokemonsList } from "../store/store";
export default {
  props: {
  },
  data() {
    return {
      store
    };
  }
};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

form {

  .thumbs-container {
    width: 270px;
    background-color: rgb(17, 62, 129);
    border-radius: 100%;

    .thumb {
      aspect-ratio: 1/1;

      &,
      &+button {
        border: 2px outset rgba(11, 76, 138, 0.808);
        background-color: rgb(87, 143, 228);
        box-shadow: -5px -2px 5px 1px inset  rgb(87, 114, 231);
      }

      .radio-btn {}
    }
  }
}
</style>