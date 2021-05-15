<template>
	<main class="demo__view">
		<demo-header>
			<demo-search-input />
		</demo-header>
		<div class="demo__view__body">
			<div v-show="sharedState.isPending" class="demo__spinner" />
		</div>
		<demo-footer author="Kris Bastiani" />
	</main>
</template>

<script>
import store from '../../store'
import DemoHeader from '../Atoms/DemoHeader.vue'
import DemoFooter from '../Atoms/DemoFooter.vue'
import DemoSearchInput from '../Atoms/DemoSearchInput.vue'

export default {
	name: 'DemoView',
	components: {
		DemoHeader,
		DemoFooter,
		DemoSearchInput
	},
	data: () => ({ sharedState: store.state })
}
</script>

<style lang="scss">
@import '../../assets/styles/tools';
@import '../../assets/styles/main';

.demo__view {
	margin: 1rem auto;
	border: 1px solid $clr__mono_m;
	width: 50rem;
	max-width: calc(100% - 2rem);
	background: $clr__mono_l;

	&__body { padding: 1rem $pad__x; }
}

.demo__spinner {
	@include anim_spin;
	display: block;
	margin: 0 auto;
	border: 2px solid $clr__primary;
	border-top-color: transparent;
	border-radius: 50%;
	width: 1rem;
	height: 1rem;
}
</style>
