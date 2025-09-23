import mongoose from "mongoose";

const MemberWorkspaceSchema = new mongoose.Schema(
    {
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        workspace: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Workspace',
            required:true 
        },
        role: {
            type:String,
            enum:['admin', 'member'],
            default:'member'
        },
        created_at: {
            type:Date,
            default:Date.now
        }
    }
);
const MemberWorkspace = mongoose.model('Members', MemberWorkspaceSchema);
export default MemberWorkspace;