const mongoose = require("mongoose");

const safetyVideoSchema = new mongoose.Schema(
  {
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "facilities",
    },

    name: {
      type: String,
    },

    description: {
      type: String,
    },
    // this is videoUrl
    videoURL: {
      type: String,
      required: true,
    },

    active: {
      type: Boolean,
      default: true,
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

module.exports = safetyVideoSchema;
