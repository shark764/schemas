const mongoose = require("mongoose");
const {ACTIVE,INACTIVE,PRIVATE,PUBLIC} = require('./configs')
const eventSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum:[ACTIVE,INACTIVE],
    default: ACTIVE
  },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [{ type: Number, required: true }],
  },
  privacySettings: {
   type: String,
   enum: [PRIVATE,PUBLIC],
   default: PUBLIC
  },
  coverImageUrl: {
    type: String,
  },
});

module.exports = eventSchema;
