
import MemberWorkspace from "../models/MemberWorkspace.model.js";
import { ServerError } from "../utils/customError.utils.js";

class MemberWorkspaceRepository {
    static async getAllWorkspacesByUserId (user_id){
        //Traer todos los workspace de los que soy miembro
        const workspaces_que_soy_miembro = await MemberWorkspace
        .find({user: user_id})
        .populate({
            path: 'workspace',
            match: {active: true}
        }) //Expandimos la propiedad de workspace, para que nos traiga el workspace completo

        console.log(workspaces_que_soy_miembro)
    }

    static async getMemberWorkspaceByUserIdAndWorkspaceId(user_id, workspace_id){
        const member_workspace = await MemberWorkspace.findOne({user: user_id, workspace: workspace_id})
        return member_workspace
    }
    static async create (user_id, workspace_id, role = 'member'){
        const member = await MemberWorkspaceRepository.getMemberWorkspaceByUserIdAndWorkspaceId(user_id, workspace_id)
        if(member){
            throw new ServerError(400, 'El usuario ya es miembro del workspace')
        }
        await MemberWorkspace.insertOne({user: user_id, workspace: workspace_id, role: role})
    }
}

export default MemberWorkspaceRepository