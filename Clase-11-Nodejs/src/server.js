

import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import Users from "./models/User.model.js";

connectMongoDB()


/* 
Users.insertOne({
    name: 'pepe',
    email: 'pepe@gmail.com',
    password: 'pepe123',
})
 */


 