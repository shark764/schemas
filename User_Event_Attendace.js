const mongoose = require("mongoose");

const usersEventsAttendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "events",
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "groups",
  },
  isInvited: {
    type: Boolean,
    default: true,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
  dateAccepted: {
    type: Date,
  },
});

module.exports = usersEventsAttendanceSchema;
