import { API_URL } from '../constants'

export default async query => {
	try {
		// TODO: abort pending fetch if exists
		const response = await fetch(`${API_URL}?query=${query}`)
		return await response.json()
	} catch (err) {
		console.error(err)
	}
}
