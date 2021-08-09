const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    benefits: [{ type: String}],

    validPeriod: {
      type: Number,
    },

    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "facilities",
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

module.exports = membershipSchema;
