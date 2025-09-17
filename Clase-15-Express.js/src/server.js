import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";
import handlebars from 'express-handlebars'
connectMongoDB()

import express from 'express'


const app = express()

//Configurar a mi app de express para que use handlebars como motor de plantillas
app.engine('handlebars', handlebars.engine())

/* Delegamos a handlebars como motor de vistas (plantillas) */
app.set('view engine', 'handlebars');

/* Marcamos la carpeta donde estaran las plantillas */
app.set('views', '/src/views');

app.use(express.json())


app.get('/test', (request, response) =>{

    //Respondo con la plantilla home.handlebars 
    response.render('home')
})

app.use('/api/workspace', workspace_router)



app.listen(
    8080, 
    () => {
        console.log("Esto esta funcionado")
    }
)

