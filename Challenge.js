const mongoose = require("mongoose");
const {ACTIVE,INACTIVE,PENDING,USER,FACILITY} = require('./configs')
const challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  // this is gameIdReference
  gameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "games",
  },
  // this is matchIdReference
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matches",
  },
  // this is scoreRequired
  requiredScore: {
    type: Number,
    required: true,
  },

  imageUrl: {
    type: String,
  },

  status: {
    type: String,
    enum:[ACTIVE,INACTIVE,PENDING],
    default: PENDING
  },
  // this is challengeType
  type: {
    type: String,
    enum:[USER,FACILITY],
    default: USER
  },

  timeFrame: {
    type: Number,
    required: true,
  },
});

module.exports = challengeSchema;
