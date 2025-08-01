import React, { useEffect, useState } from 'react'


function App() {
  /* Que maneja el estado? maneja la recarga del componente */
  const [posts, setPosts] = useState([]) 
  const [loading, setLoading] = useState(true)

  /* 
  PASO 1: Buscar la lista de posteos en la API.
  Como se hace una consulta HTTP en JS? fetch()
  fetch() es una funcion asincronica que me permite enviar una consulta HTTP a una direccion.
  Retorna una promesa
  */

  /* Cuando marcamos que la funcion es async significa que la funcion retorna una promesa y nos habilita a usar await*/
  async function getPosts (){
    const URL_API_POSTS = 'https://jsonplaceholder.typicode.com/posts'
    const response_http = await fetch(URL_API_POSTS)
    /* Transformar la carga util de la respuesta a json */
    const response = await response_http.json()
    setPosts(response)
    setLoading(false)
  }
  /* Maneja la recarga de una funcionalidad */
  useEffect(
    () => {
      getPosts()
    },
    []
  )



  return (
    <div>
      <h1>Posteos</h1>
      {
        loading
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
                      <hr/>
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
