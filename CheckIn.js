const mongoose = require("mongoose");

const checkinSchema = new mongoose.Schema({
  facilityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "facilities",
    required: true,
  },

  dateCheckIn: {
    type: Date,
    default: Date.now(),
  },

  users: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      dateTime: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

module.exports = checkinSchema;
