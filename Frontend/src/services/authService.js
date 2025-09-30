import { CONTENT_TYPE_VALUES, HEADERS, HTTP_METHODS } from "../constants/http"



export async function register(name, email, password) {
    const usuario = {
        email,
        username: name,
        password
    }

    //Queremos consumir nuesta API

    //Ordena al navegador hacer una consulta HTTP
    //recibe 2 parametros: la URL de consulta y un objeto de configuracion de consulta
    const response_http = await fetch(
        'http://localhost:8080/api/auth/register',
        {
            method: HTTP_METHODS.POST,
            headers: {
                //Como vamos a enviar JSON, configuro que mi consulta envia contenido tipo JSON
                [HEADERS.CONTENT_TYPE]: CONTENT_TYPE_VALUES.JSON
            },
            body: JSON.stringify(usuario)
        }
    )

    //Transformamos a objeto de JS el body de la respuesta
    const response_data = await response_http.json()
    if (!response_data.ok) {
        throw new Error(response_data.message)
    }
    return response_data
}

export async function login(email, password) {
    const response = await fetch(
        'http://localhost:8080/api/auth/login',
        {
            method: HTTP_METHODS.POST,
            headers: {
                [HEADERS.CONTENT_TYPE]: CONTENT_TYPE_VALUES.JSON,
            },
            body: JSON.stringify({ email, password })
        })
    const response_data = await response.json()

    if (!response.ok) {
        throw new Error(response_data.message)
    }
    return response_data
}