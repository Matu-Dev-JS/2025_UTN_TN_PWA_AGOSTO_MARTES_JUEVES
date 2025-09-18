import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";

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

