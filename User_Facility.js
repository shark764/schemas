const mongoose = require("mongoose");

const userFacilitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "facilities",
      required: true,
    },
    // this is Status
    status: {
      type: Boolean,
      default: true,
    },

    safetyVideo: {
      type: Boolean,
      default: false,
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

module.exports = userFacilitySchema;
