import dotenv from 'dotenv'
//Carga todas las variables de entorno dentro de process.env
dotenv.config()


//Creamos una constante de facil acceso a mis variables de entorno
const ENVIRONMENT = {
    MONGO_DB_CONNECTION_STRING: process.env.MONGO_DB_CONNECTION_STRING,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
}

export default ENVIRONMENT