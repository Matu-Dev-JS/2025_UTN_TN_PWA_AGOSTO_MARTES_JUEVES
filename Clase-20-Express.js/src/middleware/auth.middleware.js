import ENVIRONMENT from "../config/environment.config.js"
import { ServerError } from "../utils/customError.utils.js"
import jwt from 'jsonwebtoken'

const authMiddleware = (request, response, next) => {

    try{
        const authorization_header = request.headers.authorization
        if(!authorization_header){
            throw new ServerError(400, 'No hay header de autorizacion')
        }
        const auth_token = authorization_header.split(' ').pop()
        if(!auth_token){
            throw new ServerError(400, 'No hay token de autorizacion')
        }

        const user_data = jwt.verify(auth_token, ENVIRONMENT.JWT_SECRET_KEY)

        request.user = user_data
        next()
    }
    catch(error){
        console.log(error)
            if(error instanceof jwt.JsonWebTokenError){

                return  response.status(401).json(
                    {
                        ok: false,
                        status: 401,
                        message: 'Token invalido'
                    }
                )
            }
            else if (error instanceof jwt.TokenExpiredError) {
                return response.status(401).json(
                    {
                        ok: false,
                        status: 401,
                        message: 'Token expirado'
                    }
                )
            }
            else if (error.status) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: 'Error interno del servidor'
                    }
                )
            }
    }

}

export default authMiddleware