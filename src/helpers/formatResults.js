export default results => results.map(({
	city,
	country,
	id,
	name,
	state,
	street,
	website_url: url
}) => ({
	address: [street, city, state, country].join(', '),
	id,
	name,
	url
}))
