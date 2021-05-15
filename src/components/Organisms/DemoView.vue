<template>
	<main class="demo__view">
		<h1>Hello World</h1>
	</main>
</template>

<script>
export default {
	name: 'DemoView'
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
