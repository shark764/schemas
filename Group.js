const mongoose = require('mongoose');
const {PUBLIC,PRIVATE,ACTIVE,INACTIVE,PENDING} = require('./configs')

const groupSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },

    groupName:{
        type: String,
        required: true,
    },

    description:{
        type: String
    },

    coverPhoto:{
        type: String
    },

    privacySettings:{
        type: String,
        enum:[PUBLIC,PRIVATE],
        default: PUBLIC
    },
    // THIS IS Status
    status:{
        type: String,
        enum:[ACTIVE,INACTIVE],
        default: ACTIVE
    },

    userMembers: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "users"
            },

            isAdmin: {
                type: Boolean,
                default: false
            },

            status: {
                type: String,
                enum:[PENDING,ACTIVE,INACTIVE],
                default: PENDING
            },

            dateAccepted: {
                type: Date
            }
        }
    ]
});

module.exports= groupSchema