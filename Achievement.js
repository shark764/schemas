const mongoose = require("mongoose");
const {ACTIVE,INACTIVE} = require('./configs')

const achievementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // this is caption.
    description: {
      type: String,
    },
    // this is the scored required to set,
    parameter: {
      type: Number,
    },

    imageUrl: {
      type: String,
    },

    status: {
      type: String,
      enum:[ACTIVE,INACTIVE],
      default: ACTIVE
    },
    deletedAt: {
      type: Date,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
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

module.exports = achievementSchema;
