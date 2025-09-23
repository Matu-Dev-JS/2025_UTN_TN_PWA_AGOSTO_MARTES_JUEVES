import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";
import jwt from 'jsonwebtoken'

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


const app = express()

app.use(express.json())


app.use('/api/workspace', workspace_router)
app.use('/api/auth', auth_router)



app.listen(
    8080, 
    () => {
        console.log("Esto esta funcionado")
    }
)

