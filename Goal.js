const mongooose = require('mongoose');
const {ACTIVE,INACTIVE} = require('./configs')


const goalSchema = new mongooose.Schema({
    goalName:{
        type: String,
        required: true,     
    },

    goalCategoryId:{
        type: mongooose.Schema.Types.ObjectId,
        ref: 'goal_categories',
        required: true,
    },

    facilityId:{
        type: mongooose.Schema.Types.ObjectId,
        ref: 'facilities',   
    },

    imageUrl:{
        type: String,
    },
    // this is Status
    status:{
        type: string,
        enum: [ACTIVE, INACTIVE],
        default: ACTIVE,
    },

    deletedAt:{
        type: Date,
    },

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },

    updatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    deletedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },

},{timestamps: true});

module.exports = goalSchema