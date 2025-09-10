import Workspaces from "../models/Workspace.model.js"

class WorkspacesRepository {
    static async createWorkspace(
        name, 
        url_image
    ){
        await Workspaces.insertOne({
            name: name,
            url_image: url_image
        })
        return true
        
    }
    static async getAll (){
        const workspaces_get = await Workspaces.find()
        return workspaces_get
    }

    static async getById (workspaces_id){
        const workspaces_found = await Workspaces.findById(workspaces_id)
        return workspaces_found
    }
    static async deleteById(workspaces_id){
        await Workspaces.findByIdAndDelete(workspaces_id)
        return true
    }

    static async updateById(
        workspaces_id, 
        new_values
    ){
        const workspace_updated = await Workspaces.findByIdAndUpdate(
            workspaces_id, 
            new_values, 
            {
                new: true
            }
        )
        return workspace_updated
    }

}

export default WorkspacesRepository