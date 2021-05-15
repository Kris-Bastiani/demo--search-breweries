<template>
<input
	type="text"
	class="demo__search_input"
	placeholder="Enter a search term (e.g. Tiberius)"
	v-model="query"
	@input="onInput"
/>
</template>

<script>
import store from '../../store'
import getResults from '../../helpers/getResults'

export default {
	name: 'DemoSearchInput',
	data: () => ({ query: '' }),
	methods: {
		async onInput () {
			if (!this.query || this.query.length < 3) return
			store.setIsPending(true)
			// TODO: throttle getResults
			const response = await getResults(this.query)
			this.$emit('get-results', response.result)
			store.setIsPending(false)
		}
	}
}
</script>

<style lang="scss">
@import '../../assets/styles/tools';

.demo__search_input {
	display: block;
	margin: 0 auto;
	border: 1px solid $clr__mono_m;
	border-radius: 3px;
	padding: 0.5rem;
	width: 100%;
	max-width: 25rem;
	font-size: 1rem;
}
</style>
