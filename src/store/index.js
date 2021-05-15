export default {
	debug: true,
	state: {
		isPending: false,
		results: []
	},
	setIsPending (newVal) {
		this.debug && console.info('setIsPending:', newVal)
		this.state.isPending = newVal
	},
	setResults (newVal) {
		this.debug && console.info('setResults:', newVal)
		this.state.results = newVal
	}
}
