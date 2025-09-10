

import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import ChannelMessage from "./models/ChannelMessage.model.js";
import MemberWorkspace from "./models/MemberWorkspace.model.js";
import Users from "./models/User.model.js";
import Workspaces from "./models/Workspace.model.js";
import UserRepository from "./repositories/user.repository.js";

connectMongoDB()


/* UserRepository.getAll().then(res => console.log(res)) */

//Opcion 1 para probar codigo asincronico
/* async function accion(){

    const result = await UserRepository.updateById(
        '68b787a7f258a4c56cc13898', 
        {
            email: 'pedrito@gmail.com'
        }
    )
    console.log(result)
}
accion()
 */

//Opcion 2 para probar codigo asincronico
/* UserRepository.updateById(
    '68b787a7f258a4c56cc1389', 
    {
        email: 'pedrito@gmail.com'
    }
)
//then es un metodo que se activara cuando se resuelva la promesa
.then(
    () => {
        console.log('hola')
    }
)
//catch es un metodo que se activara si falla la resolucion de una promesa
.catch(
    (razon_de_error) => {
        console.log('Error al actualizar', razon_de_error)
    }
)
 */

UserRepository.getAll()
.then(
    (result) =>{
        console.log(result)
        UserRepository.updateById(
            '68b787a7f258a4c56cc13898',
            {
                email: 'test@gmail.com'
            }
        ).then (
            ( ) => {
                UserRepository.getById('68b787a7f258a4c56cc13898')
                .then(
                    (result) => {
                        console.log(result)
                    }
                )
            }
        )
    }
)

 