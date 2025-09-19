import transporter from "../config/mailer.config.js"
import UserRepository from "../repositories/user.repository.js"
import { ServerError } from "../utils/customError.utils.js"
import bcrypt from 'bcrypt'

class AuthService{
    static async register(username, password, email){
        console.log(username, password, email)
        
        //Verificar que el usuario no este repido
        //  - .getByEmail en UserRepository

        // const user_found = await UserRepository.getByEmail(email)
        // if(user_found){
        //     throw new ServerError(400, 'Email ya en uso')
        // }

        //Encriptar la contraseña
        //const password_hashed = await bcrypt.hash(password, 12)
        
        //guardarlo en la DB
        //await UserRepository.createUser(username, email, password_hashed)

        //Enviar un mail de verificacion
        await transporter.sendMail({
            from: 'mati.dev.gimenez@gmail.com',
            to: 'mati.dev.gimenez@gmail.com',
            subject: 'Verificacion de correo electronico',
            html: `
            <h1>Hola desde node.js</h1>
            <p>Este es un mail de verificacion</p>
            <a href='http://localhost:8080/api/auth/verify-email/pepe@gmail.com'>Verificar email</a>
            `
        })
    }
}

export default AuthService