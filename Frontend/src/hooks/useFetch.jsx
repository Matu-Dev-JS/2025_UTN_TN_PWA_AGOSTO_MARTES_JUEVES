import { useState } from "react"

/* Gestion INTERNA de los fetch de mi aplicacion */
const useFetch = () =>{
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    async function sendRequest ( requestCallback ){
        try{
            //Marcamos que estamos cargando
            setLoading(true)
            setError(null)

            //Ejecutamos la consulta HTTP
            const response = await requestCallback()

            //Seteamos la respuesta como estado
            setResponse(response)
        }
        catch(error){
            setError(error)
        }
        //Finalmente pase lo que pase deja de cargar
        finally{
            setLoading(false)
        }
    }

    return {
        loading,
        response,
        error,
        sendRequest
    }
} 

export default useFetch