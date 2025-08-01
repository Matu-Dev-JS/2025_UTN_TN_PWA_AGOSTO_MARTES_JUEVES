import React, { useEffect, useState } from 'react'
import { getPosts } from './services/postService'
import useCustomFetch from './hooks/useCustomHook'
import { getUsers } from './services/userService'




/* Los componentes SOLO deben manejar logica de renderizado */
function App() {




	/* response: post es igual a desestructurar la propiedad response y nombrar a esa variable como posts */
	const {
		loading: loading_posts, 
		response: posts, 
		sendFetch: sendFetchPosts
	} = useCustomFetch({
		initial_loading: false, 
		initial_response: []
	})

	const {
		loading: loading_users, 
		response: users, 
		sendFetch: sendFetchUsers
	} = useCustomFetch({
		initial_loading: false, 
		initial_response: []
	})

	

	/* Maneja la recarga de una funcionalidad */
	useEffect(
		() => {
			sendFetchPosts(getPosts)
			sendFetchUsers(getUsers)
		},
		[]
	)


	return (
		<div>
			<h1>Posteos</h1>
			{
				loading_posts
					? <h2>Cargando...</h2>
					: <div>
						{
							posts.length === 0
								? <h2>No hay posteos aun</h2>
								: <div>

									{
										posts.map(post => {
											return (
												<div>
													<h3>{post.title}</h3>
													<p>{post.body}</p>
													<button>Like</button>
													<hr />
												</div>
											)
										})
									}
								</div>
						}
					</div>
			}
		</div>
	)
}

export default App
