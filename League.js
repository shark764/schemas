const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema(
  {
    // this is leagueName
    name: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      default: true,
    },
    isTemporal: {
      type: Boolean,
      default: false,
    },
    // this is fromDateTime
    from: {
      type: Date,
      default: Date.now(),
    },
    // this is toDateTime
    to: {
      type: Date,
      required: true,
    },

    deletedAt: {
      type: Date,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    deletedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = leagueSchema;
