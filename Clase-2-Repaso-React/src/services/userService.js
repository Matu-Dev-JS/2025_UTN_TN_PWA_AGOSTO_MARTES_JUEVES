export async function getUsers() {
	const URL_API_USERS = 'https://jsonplaceholder.typicode.com/users'
	const response_http = await fetch(URL_API_USERS)
	const response = await response_http.json()
	return response
}
