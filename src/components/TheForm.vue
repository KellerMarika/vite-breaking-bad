<template>

  <form class="form-container position-relative m-5" action="get">


    <div class="thumbs-container w-100 row m-0">

      <NameFilterImput class="col"></NameFilterImput>

      <template
          v-for="(type, i) in store.pokemonsTypesList">


        <label
            class="col thumb d-flex position-relative rounded-2 d-flex justify-content-center align-items-center"
            :for="type">

          <TypesFilterOptions :key="type" :type="type"></TypesFilterOptions>
        </label>

        <IdFilterImput class="col" v-if="(i === (this.store.pokemonsTypesList.length + 2) / 2)"></IdFilterImput>

      </template>

      <button type="button"
          class=" submit search-btn col fw-bold d-block position-relative d-flex justify-content-center align-items-center">
        Search</button>

    </div>
  </form>

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


.name.search-btn {
  flex-basis: calc((100% / 14) *3);
  flex-grow: 0;
  border-radius: 10px;
  border-top-left-radius: 20px 80px;
}

.id.search-btn {
  flex-basis: calc((100% / 14) *2);
  flex-grow: 0;
  border-radius: 10px;
  border-bottom-left-radius: 20px 80px;
  ;
}

.submit.search-btn {
  flex-basis: calc((100% / 14) *5);
  border-radius: 5px;
  border-bottom-right-radius: 60px 60px;

  &:active {
    color: rgb(210, 255, 138);
  }
}

.thumb {
  flex-basis: calc(100% / 14);
  flex-grow: 0;
}

form {
  .thumbs-container {
   width: 720;
    border-radius: 100%;
    z-index: 2;
    background-color: rgb(17, 62, 129);
 

    .thumb {
      aspect-ratio: 1/1;
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

  .search-btn {

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
}
</style>