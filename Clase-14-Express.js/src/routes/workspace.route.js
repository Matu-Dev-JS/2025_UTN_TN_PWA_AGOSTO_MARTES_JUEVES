import express from 'express'
import WorkspacesRepository from '../repositories/workspace.repository.js'
import { validarId } from '../utils/validations.utils.js'

//Manejar consultas referidas a workspace

const workspace_router = express.Router()


workspace_router.get('/', async (request, response) => {
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
})


workspace_router.get('/:workspace_id', async (request, response) => {
    const workspace_id = request.params.workspace_id

    if (validarId(workspace_id)) {
        const workspace = await WorkspacesRepository.getById(workspace_id)

        if (!workspace) {
            return response.json(
                {
                    ok: false,
                    message: `Workspace con id ${workspace_id} no encontrado`
                }
            )
        }
        else {

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
    else {
        return response.json(
            {
                ok: false,
                message: 'workspace_id debe ser un id valido'
            }
        )
    }

})

//Este es el endpoint para crear workspaces
workspace_router.post('/', async (request, response) => {
    try{

        //request.body es donde esta la carga util enviada por el cliente
        //si aplicamos express.json() en nuestra app body siempre sera de tipo objeto
        const name = request.body.name
        //Validar que name este y que sea valido (por ejemplo un string no VACIO de no mas de 30 caracteres)
        if(!name || typeof(name) !== 'string' || name.length > 30){
            return response.json({
                ok: false,
                message: "el campo 'name' debe ser un string de menos de 30 caracteres"
            })
        }
        else{
            //Creamos el workspace con el repository
            await WorkspacesRepository.createWorkspace(name, '')
            //Si todo salio bien respondemos con {ok: true, message: 'Workspace creado con exito'}
            return response.json({
                ok: true,
                message: 'Workspace creado con exito'
            })
        }
    }
    catch(error){
        console.log(error)
        return response.json(
            {
                ok: false,
                message: 'Error interno del servidor'
            }
        )
    }

})




export default workspace_router