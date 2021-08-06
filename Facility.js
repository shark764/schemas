const mongoose = require("mongoose");
const { FACILITY1, FACILITY2 } = require("./configs");
const facilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
    },

    address: {
      type: String,
      required: true,
    },

    location: {
      type: { type: String, default: "Point" },
      coordinates: [{ type: Number, required: true }],
    },

    schedule: {
      type: String,
      trim: true,
      required: true,
    },

    phoneNumberPrimary: {
      type: String,
      required: true,
    },

    phoneNumberSecondary: {
      type: String,
    },

    website: {
      type: String,
    },

    facilityType: {
      type: String,
      enum: [FACILITY1, FACILITY2],
      default: FACILITY1,
    },

    socialMedia: [
      {
        name: {
          type: String,
          required: true
        },
        urlPath: {
          type: String,
        },
      },
    ],
    // Shouldnt this be type user an array of ObjectId(users)?
    facilityAdmin: [
      {
        name: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          trim: true,
        },
        email: {
          type: String,
          trim: true,
        },
      },
    ],
    // Shouldnt this be type user an array of ObjectId(users)?
    facilityAssociate: [
      {
        name: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          trim: true,
        },
        email: {
          type: String,
          trim: true,
        },
      },
    ],

    pictures: [
      {
        image: {
          type: String,
          required: true
        },

        comment: {
          type: String,
        },
      },
    ],

    amenities: [{ type: String }],

    buildingSize: {
      type: Number,
    },

    buildingSizeIncluding: {
      type: Number,
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

    // MISSING
    // lineOfBussiness 
    // facilityLayoutIndoor 
  },
  { timestamps: true }
);

module.exports = facilitySchema;
