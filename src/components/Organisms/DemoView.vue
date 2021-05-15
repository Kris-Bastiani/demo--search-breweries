<template>
	<main class="demo__view">
		<demo-header>
			<demo-search-input />
		</demo-header>
		<demo-footer author="Kris Bastiani" />
	</main>
</template>

<script>
import DemoHeader from '../Atoms/DemoHeader.vue'
import DemoFooter from '../Atoms/DemoFooter.vue'
import DemoSearchInput from '../Atoms/DemoSearchInput.vue'

export default {
	name: 'DemoView',
	components: {
		DemoHeader,
		DemoFooter,
		DemoSearchInput
	}
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
</style>
