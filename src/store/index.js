import { reactive } from 'vue'

export default {
	debug: true,
	state: reactive({
		isPending: false,
		results: []
	}),
	setIsPending (newVal) {
		this.debug && console.info('setIsPending:', newVal)
		this.state.isPending = newVal
	},
	setResults (newVal) {
		this.debug && console.info('setResults:', newVal)
		this.state.results = newVal
	}
}
