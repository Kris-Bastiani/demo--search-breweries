<template>
	<div class="demo__result">
		<a
			class="demo__result__name"
			:href="url"
			target="_blank"
		>
			{{ name }}
		</a>

		<address class="demo__result__address">
			<a :href="addressUrl" target="_blank">{{ address }}</a>
		</address>
	</div>
</template>

<script>
export default {
	name: 'DemoResult',
	props: {
		address: String,
		id: Number,
		name: String,
		url: String
	},
	computed: {
		addressUrl () { return `https://www.google.com/maps/place/${this.address}` }
	}
}
</script>
