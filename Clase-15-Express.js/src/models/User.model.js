import mongoose from "mongoose";


//El esquema tiene los "contratos" de que es un User que luego podremos asignarselo a la coleccion de usuarios
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        created_at: {
            type: Date, 
            default: Date.now
        },
        modified_at: {
            type: Date,
            default: null
        },
        active: {
            type: Boolean,
            default: true
        }
    }
)

//Crear el modelo de User, cada accion que hagamos a la coleccion de User se hara por medio del modelo

const Users = mongoose.model('User', userSchema)

export default Users