//En base lo aprendido en User.model.js ahora crear el Workspace.model.js
//name, url_image, modified_at, created_at, active

import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        url_image: {
            type: String,
            required: true
        },
        modified_at: {
            type: Date,
            default: null
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        active: {
            type: Boolean,
            default: true
        }
    }
)

const Workspaces = mongoose.model('Workspace', workspaceSchema)

export default Workspaces