const mongoose = require("mongoose");
const {ACTIVE,INACTIVE} = require('./configs')

const userAchievementsSchema = new mongoose.Schema(
  {
    achievementId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "achievements",
      required: true,
    },
    // this is userFacilitiesId
    userFacilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_facilities",
      required: true,
    },
    // this is dateOfAchivied ==> TYPO
    dateOfAchieved: {
      type: Date,
    },
    status: {
      type: String,
      enum: [ACTIVE, INACTIVE],
      default: ACTIVE,
    },
  },
  { timestamps: true }
);

module.exports = userAchievementsSchema;
