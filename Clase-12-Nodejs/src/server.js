

import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import ChannelMessage from "./models/ChannelMessage.model.js";
import MemberWorkspace from "./models/MemberWorkspace.model.js";
import Users from "./models/User.model.js";
import Workspaces from "./models/Workspace.model.js";
import UserRepository from "./repositories/user.repository.js";

connectMongoDB()


/* UserRepository.getAll().then(res => console.log(res)) */
UserRepository.updateById(
    '68b787a7f258a4c56cc13898', 
    {
        email: 'pedrito@gmail.com'
    }
)





 