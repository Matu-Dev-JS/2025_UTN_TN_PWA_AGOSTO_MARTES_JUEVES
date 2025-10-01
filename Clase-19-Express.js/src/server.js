import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";

/* 
sing: Se usa para firmar tokens
    - payload: Carga util, la informacion que llevara el token, es el objeto que sera guardado dentro del token. NO GUARDAR INFORMACION SENSIBLE.

    - clave secreta para firmar. Si te roban esta clave TUS TOKENS SON INSEGUROS

    - Configuraciones, por ejemplo una fecha de expiracion.
*/

/* const token_test = jwt.sign(
    {
        nombre: 'pepe'
    },
    ENVIRONMENT.JWT_SECRET_KEY,
    {
        expiresIn: '24h'
    }
)

console.log(token_test) */


connectMongoDB()

import express from 'express'
import auth_router from "./routes/auth.router.js";
import UserRepository from "./repositories/user.repository.js";
import cors from 'cors'
import authMiddleware from "./middleware/auth.middleware.js";
import MemberWorkspaceRepository from "./repositories/memeberWorkspace.repository.js";



const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/workspace', workspace_router)
app.use('/api/auth', auth_router)

//Constructor de middlewares
const randomMiddleware = (min_numero_random) => {
    return (request, response, next) =>{
        const numero_random = Math.random()
        if(numero_random < min_numero_random){
            response.send({message: 'Tienes mala suerte'})
        }
        else{
            request.tieneSuerte = true
            next()
        }
    }
}

/* 
 */
//Personalizar el randomMiddleware para que podamos configurar el numero minimo de suerte (0.5 por defecto)

app.get('/test',  randomMiddleware(0.9), (request, response) => {
    console.log(request.tieneSuerte)
    response.send({
        ok: true
    })
})

app.get('/ruta-protegida', authMiddleware, (request, response) => {
    console.log(request.user)
    response.send({
        ok: true
    })
})



app.listen(
    8080, 
    () => {
        console.log("Esto esta funcionado")
    }
)

/* MemberWorkspaceRepository.create(
    '68d333697f90d40f450edb15', 
    '68b790eea6301ea1e4ac1727'
) */
MemberWorkspaceRepository.getAllWorkspacesByUserId('68d333697f90d40f450edb15')