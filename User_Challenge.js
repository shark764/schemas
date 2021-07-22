const mongoose = require("mongoose");
const userChallengeSchema = new mongoose.Schema({
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "challenges",
    required: true,
  },

  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matches",
    required: false,
  },
  // Does this needs to point to 'user_facilities'?
  // Missing on Table
  challengeFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_facilities",
  },
  // Does this needs to point to 'user_facilities'?
  challengeTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_facilities",
  },

  status: {
    type: String,
    enum: [ACTIVE, PENDING, INACTIVE],
    default: PENDING,
  },

  dateAccepted: {
    type: Date,
  },
});

module.exports = userChallengeSchema;
