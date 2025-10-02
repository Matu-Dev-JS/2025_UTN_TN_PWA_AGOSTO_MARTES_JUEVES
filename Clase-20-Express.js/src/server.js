import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";


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

