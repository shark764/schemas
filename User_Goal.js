const mongoose = require("mongoose");
const userGoalSchema = new mongoose.Schema({
  userFacilityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_facilities",
    required: true,
  },

  goalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "goals",
    required: true,
  },

  status: {
    type: Boolean,
    default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = userGoalSchema;
