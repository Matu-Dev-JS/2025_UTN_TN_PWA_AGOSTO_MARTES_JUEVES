import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";
connectMongoDB()

import express from 'express'


//Crear una aplicacion de express (Un servidor web)
const app = express()

//Hablilitamos el envio de JSON
//Sino esta esta opcion NO nos pueden enviar JSON
//primero habilitamos que nos envien JSON
//middleware, cada vez que me llegue una consulta checkearemos si es JSON y la parsearemos a un objeto de JS
app.use(express.json())


//luego configuramos nuestro enrutador
//Configurando en mi app (server) que todas las consultas que empiezen con /api/workspace se delegen al workspace_router
app.use('/api/workspace', workspace_router)



app.listen(
    8080, 
    () => {
        console.log("Esto esta funcionado")
    }
)

