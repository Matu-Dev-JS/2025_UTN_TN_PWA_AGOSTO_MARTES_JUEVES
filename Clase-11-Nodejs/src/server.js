

import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import Users from "./models/User.model.js";
import Workspaces from "./models/Workspace.model.js";

connectMongoDB()


/* 
Users.insertOne({
    name: 'pepe',
    email: 'pepe@gmail.com',
    password: 'pepe123',
})
 */

/* 
Workspaces.insertOne({
    name: 'Test',
    url_image: 'test-value'
})

  */