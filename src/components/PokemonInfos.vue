<template>
	
  <div id="pokemon-infos" class="d-flex flex-column gap-4 position-relative rounded-4">
	</div>
  
  </template>
  
  <script>
  
  export default {
    props: {
    },
    data () {
      return {
      };
    }
  };
  </script>
  
  <style scoped lang="scss">
@use "../styles/partials/variables" as *;

 #pokemon-infos {
	margin-top: 50px;
	width: 60%;
	aspect-ratio: 20/8;
	left: 50%;
	transform: translateX(-50%);

  background: rgb(175,228,175);
background: radial-gradient(circle, rgba(175,228,175,1) 0%, rgba(174,226,174,1) 4%, rgba(149,199,149,1) 75%, rgba(145,156,145,1) 97%, rgba(119,120,119,1) 100%);

box-shadow: -1px 1px 10px 2px inset  rgba(119,120,119,1);
border: 1px outset $bg_primary_color;


}
  
  </style>