<template>

	<!-- bg -->
	<div id="global-bg" class="container-fluid vh-100 d-flex bg-dark">
		<div id="main-container" class=" flex-fill">
			<div class="row h-100 justify-content-center ">

				<!-- THE CONTAINER ------->
				<div class="col-11 d-flex h-100 position-relative">

					<!-- LEFTCONTAINER -->
					<div id="left-container" class="flex-fill d-flex flex-column "><!-- _________________________ -->

						<NavTop></NavTop>

						<!-- MAIN pokemon -->
						<div id="left-main-container" class="flex-fill">


							<LeftMonitorInfos
									:PokemonInfosSubject="activeCard">
								<!--ShowFilterOptions -->
								<!-- PokemonInfos -->

							</LeftMonitorInfos>

							<!-- FORM ? -->
							<TheForm></TheForm>

						</div>

						<NavBottom></NavBottom>
					</div>
					<div class="separator"></div>
					<!-- CONTAINER -->
					<aside id="right-container" class="d-flex flex-column">

						<NavTop></NavTop>

						<PokemonList @toActiveCard="setActiveCard" />

						<NavBottom></NavBottom>

					</aside>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import NavBottom from './components/NavBottom.vue';
import NavTop from './components/NavTop.vue';
import LeftMonitorInfos from './components/LeftMonitorInfos.vue';
import PokemonList from './components/PokemonList.vue';
import TheForm from './components/TheForm.vue';
import { store } from './store/store';


export default {
	components: { NavTop, NavBottom, PokemonList, LeftMonitorInfos, TheForm },
	data() {
		return {
			store,
			activeCard: null,
		}
	},
	methods: {
		setActiveCard(clickedCard) {
			//console.log("clicked",clickedCard)
			this.activeCard = clickedCard
			this.store.toShow="infos"
			console.log("active", this.activeCard)
		}
	},
}
</script>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/partials/variables" as *;

body {
	font-family: 'Roboto Condensed', sans-serif;
}

#left-container {
	background: $bg_primary_color;
	width: calc(50% - 15px);
}

#right-container {

	background: $bg_primary_color;
	width: calc(50% - 15px);
}

.col-11 {
	box-shadow: 0px 0px 5px 10px inset $bg_primary_color_dark ;

}

#right-container {
	box-shadow: 0px 0px 2px 5px inset $bg_primary_color_dark ;
	background: rgb(209, 12, 118);
	background: linear-gradient(270deg, rgba(209, 12, 118, 1) 0%, rgba(233, 38, 144, 1) 2%, rgba(213, 105, 164, 1) 23%, rgba(233, 38, 144, 1) 89%, rgba(233, 38, 144, 1) 96%, rgba(182, 17, 106, 1) 100%);

}

#left-container {
	box-shadow: 0px 0px 2px 3px inset $bg_primary_color_dark ;

	background: rgb(209, 12, 118);
	background: linear-gradient(130deg, rgba(209, 12, 118, 1) 0%, rgba(233, 38, 144, 1) 2%, rgba(213, 105, 164, 1) 23%, rgba(233, 38, 144, 1) 89%, rgba(233, 38, 144, 1) 96%, rgba(182, 17, 106, 1) 100%);
}

#left-main-container {
	border-right: 10px double rgba(209, 12, 118, 1);
}

.separator {
	width: 30px;
	height: 100%;
	background: rgb(209, 12, 118);
	background: linear-gradient(90deg, rgba(209, 12, 118, 1) 0%, rgba(233, 38, 144, 1) 11%, rgba(213, 105, 164, 1) 21%, rgba(233, 38, 144, 1) 34%, rgba(233, 38, 144, 1) 71%, rgba(182, 17, 106, 1) 100%);
}


#main-container {
	margin: 120px 0;
}
</style>
