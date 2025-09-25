import { CONTENT_TYPE_VALUES, HEADERS, HTTP_METHODS } from "../constants/http"



export async function register (name, email, password){
    const usuario = {
        email,
        name,
        password
    }

    //Queremos consumir nuesta API

    //Ordena al navegador hacer una consulta HTTP
    //recibe 2 parametros: la URL de consulta y un objeto de configuracion de consulta
    await fetch(
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
}

function login (){

}