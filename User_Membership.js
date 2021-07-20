const mongoose = require("mongoose");
const { CARD } = require("./configs");
const userMembershipSchema = new mongoose.Schema(
  {
    // this is userFacilitiesId
    userFacilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_facilities",
      required: true,
    },

    membershipId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "memberships",
      required: true,
    },

    buyDate: {
      type: Date,
      default: Date.now(),
    },

    expirationDate: {
      type: Date,
      required: true,
    },
    // this is paymentMethodId.
    paymentMethod: {
      type: String,
      default: CARD,
    },

    price: {
      type: Number,
      required: true,
    },
    // this is taxPercentaje
    taxPercentage: {
      type: Number,
    },
    // this is tax with price?
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = userMembershipSchema;
