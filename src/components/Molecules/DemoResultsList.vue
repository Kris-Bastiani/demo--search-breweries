<template>
	<ul class="demo__results_list">
		<template v-if="hasResults">
			<li
				v-for="result in results"
				:key="result.id"
				class="demo__results_list__item"
			>
				<demo-result v-bind="result" />
			</li>
		</template>
		<li v-else>
			We couldn't find any breweries that matched your search term.
		</li>
	</ul>
</template>

<script>
import DemoResult from '../Atoms/DemoResult.vue'

export default {
	name: 'DemoResultsList',
	components: { DemoResult },
	props: {
		results: {
			default: () => [],
			type: Array
		}
	},
	computed: {
		hasResults () { return !!this.results && !!this.results.length }
	},
	updated () { console.warn('list updated') }
}
</script>

<style lang="scss">
@import '../../assets/styles/tools';

.demo__results_list {
	padding: 0;
	list-style: none;

	&__item { margin: 1rem 0; }
}
</style>
