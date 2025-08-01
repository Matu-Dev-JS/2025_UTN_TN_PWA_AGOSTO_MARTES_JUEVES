export async function getPosts() {
	const URL_API_POSTS = 'https://jsonplaceholder.typicode.com/posts'
	const response_http = await fetch(URL_API_POSTS)
	const response = await response_http.json()
	return response
}
