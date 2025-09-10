import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
connectMongoDB()

import express from 'express'
import UserRepository from "./repositories/user.repository.js";
import WorkspacesRepository from "./repositories/workspace.repository.js";
import mongoose from "mongoose";
import { validarId } from "./utils/validations.utils.js";

//Crear una aplicacion de express (Un servidor web)
const app = express()

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.put('/', (request, response) => {

    response.send('Hello World!')
})


app.get('/test', (request, response) => {

    response.send('<h1>Hola</h1>')
})


/* 
-app.get() nos permite configurar un endpoint en nuestro servidor.
    -El primer parametro: string, que representa el endpoint que estamos configurando.
    -El segundo parametro: fn, que es la accion que se ejecutara cuando suceda la consulta.
        -Esta funcion puede ser async en caso de ser necesario.
        -Esa funcion recibe siempre 2 parametros (Que son dados pro express), request, response.
            -request: Es un objeto con la configuracion de la consulta
            -response: Es un objeto con la configuracion de la respuesta
                -response.send(): es un metodo que permite enviar un valor como respuesta de servidor. Puede ser un string o objeto, en caso de ser un objeto sera transformado a JSON
                -(RECOMENDADO): Si vas a responder un JSON deberias usar mejor response.json()
*/
        
app.get(
    '/status', 
    (request, response) => {
        
        response.json(
            {
                ok: true, 
                message: "servidor funcionando"
            }
        )
    }
)


app.get(
    '/users', 
    async (request, response) => {
        const users = await UserRepository.getAll()
        response.json(
            {
                ok: true, 
                message: "Usuarios obtenidos",
                users: users
            }
        )
    }
)
//Cuando me consulten a esta direccion respondere con la lista de espacios de trabajo guardada en mi DB
app.get(
    '/workspaces', 
    async (request, response) => {
        const workspaces = await WorkspacesRepository.getAll()
        response.json(
            {
                status: 'OK',
                message: 'Lista de espacios de trabajo obtenida correctamente',
                data: {
                    workspaces: workspaces
                }
            }
        )
    }
)

//Route param, URL param
app.get(
    '/workspaces/:workspace_id',
    async ( request, response ) =>{
        //Es un objeto donde estan los valores de parametro de busqueda
        //EJEMPLO:
        //Si la ruta es '/workspaces/:workspace_id'
        //Entonces request.params sera: {workspace_id: valor_workspace_id (siempre sera un string)}
        
        //paso 1 Capturar el ID
        const workspace_id = request.params.workspace_id
        console.log('El valor de id de workspace a buscar es', workspace_id)

        //paso 2: Validar el ID
        //IMPORTANTE, siempre la funcion que controla la consulta debe responder 
        if(validarId(workspace_id)){
            //paso 3: Buscamos en DB
            const workspace = await WorkspacesRepository.getById(workspace_id)
            //paso 4: Validamos si se encontro
            if(!workspace){
                return response.json(
                    {
                        ok: false,
                        message: `Workspace con id ${workspace_id} no encontrado`
                    }
                )
            }
            else{

                return response.json(
                    {
                        ok: true,
                        message: `Workspace con id ${workspace._id} obtenido`,
                        data: {
                            workspace: workspace
                        }
                    }
                )
            }
        }
        else{
            return response.json(
                {
                    ok: false,
                    message: 'workspace_id debe ser un id valido'
                }
            )
        }

        

        
    }
)

//Buscar usuario por id (con validaciones)


//.listen() es un metodo para asignar un lugar donde nuestro servidor se estara ejecutando
//Primer parametro: Numero de puerto donde se estara ejecutando el servidor
//Segundo parametro:  una callback fn que se ejecutara si logra prender correctamente en esa direccion mi servidor
app.listen(
    8080, 
    () => {
        console.log("Esto esta funcionado")
    }
)

