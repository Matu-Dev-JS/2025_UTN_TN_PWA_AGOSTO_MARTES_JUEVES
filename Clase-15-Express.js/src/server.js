import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import workspace_router from "./routes/workspace.route.js";
import handlebars from 'express-handlebars'
connectMongoDB()

import express from 'express'
import WorkspacesRepository from "./repositories/workspace.repository.js";


const app = express()

//Configurar a mi app de express para que use handlebars como motor de plantillas
app.engine('handlebars', handlebars.engine({
    runtimeOptions: { 
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

/* Delegamos a handlebars como motor de vistas (plantillas) */
app.set('view engine', 'handlebars');

/* Marcamos la carpeta donde estaran las plantillas */
app.set('views', './src/views');

app.use(express.json())


app.get('/test', async (request, response) =>{
    let edad = 50
    const workspaces = await WorkspacesRepository.getAll()
    //Respondo con la plantilla home.handlebars 
    response.render(
        'home', 
        {
            name: 'pepe',
            is_admin: false,
            es_mayor: edad >= 18,
            workspaces: workspaces
        }
    )
})

app.get('/workspace/:workspace_id', async (request, response) => {
    const {workspace_id} = request.params
    const workspace_detail = await WorkspacesRepository.getById(workspace_id)
    response.render('workspace-detail', {
        workspace: workspace_detail
    })
})

app.use('/api/workspace', workspace_router)



app.listen(
    8080, 
    () => {
        console.log("Esto esta funcionado")
    }
)

