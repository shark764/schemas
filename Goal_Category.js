const mongoose = require("mongoose");
const { ACTIVE, INACTIVE } = require("./configs");

const goalCategorySchema = new mongoose.Schema(
  {
    goalCategory: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },

    status: {
      type: string,
      enum: [ACTIVE, INACTIVE],
      default: ACTIVE,
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
  { timeStamps: true }
);

module.exports = goalCategorySchema
