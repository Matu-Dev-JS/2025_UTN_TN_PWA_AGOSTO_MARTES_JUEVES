import Users from "../models/User.model.js";


class UserRepository {
    static async createUser(name, email, password){
        //Logica de interaccion con la DB para crear el usuario
        await Users.insertOne({
            name: name,
            email: email,
            password: password,
        })
        return true
    }

    static async getAll (){
        //.find es un metodo para hacer filtro en una coleccion
        const users = await Users.find()
        return users
    }

    static async getById (user_id){
        const user_found = await Users.findById(user_id)
        return user_found
    }
    
    static async deleteById (user_id){
        await Users.findByIdAndDelete(user_id)
        return true
    }

    static async updateById (user_id, new_values){
        const user_updated = await Users.findByIdAndUpdate(
            user_id, 
            new_values, 
            {
                new: true //Cuando se haga la actualizacion nos traiga el objeto actualizado
            } 
        )

        return user_updated
    }
}

export default UserRepository


//Un metodo o propiedad estatica puede ser llamada desde la clase, sin necesidad de instanciar dicha clase
//Por que usar estaticos? para no tener mas de una instancia del userRepository






/* 
const userRepository = new UserRepository()
userRepository.createUser() 
*/