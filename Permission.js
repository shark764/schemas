const mongoose = require("mongoose");

const permissionsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    readOnly: {
      type: Boolean,
      default: true,
    },
    deletedAt: {
      type: Date,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    updatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },

    deletedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
  },
  { timestamps: true }
);

module.exports = permissionsSchema;
