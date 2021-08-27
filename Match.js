const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema(
  {
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "games",
      required: true,
    },

    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],

    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users_match",
      },
    ],

    zoneId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "zones",
      required: true,
    },

    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = matchSchema;
