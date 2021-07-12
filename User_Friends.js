const mongoose = require("mongoose");
const { PENDING, ACTIVE, INACTIVE } = require("./configs");

const userFriendSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  friendUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  requestDate: {
    type: Date,
    default: Date.now(),
  },

  acceptedDate: {
    type: Date,
  },

  rejectedDate: {
    type: Date,
  },

  statusRequest: {
    type: String,
    enum: [ACTIVE, INACTIVE, PENDING],
    default: PENDING,
  },
});

module.exports = userFriendSchema;
