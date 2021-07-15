const mongoose =require('mongoose');

const userMatchSchema = new mongoose.Schema({
    userFacilityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_facility',
        required: true
    },
    score: {
        type: Number,
    },
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    power:{
        type: Number,
    },
    direction:{
        type: Number,
    },
    distance:{
        type: Number,
    },
    gameDateTime:{
        type: Date,
        default: Date.now()
    }
    
});

module.exports = userMatchSchema