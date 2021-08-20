const mongoose = require("mongoose");

const userMatchSchema = new mongoose.Schema({
  score: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  power: {
    type: Number,
  },
  direction: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  gameDateTime: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = userMatchSchema;
