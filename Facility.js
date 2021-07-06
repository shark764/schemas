const mongoose = require("mongoose");
const { FACILITY1, FACILTIY2 } = require("./configs");
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
      type: string,
    },

    website: {
      type: string,
    },

    facilityType: {
      type: string,
      enum: [FACILITY1, FACILITY2],
      default: FACILITY1,
    },

    socialMedia: [
      {
        name: {
          type: string,
          required: true
        },
        urlPath: {
          type: string,
        },
      },
    ],
    // Shouldnt this be type user an array of ObjectId(users)?
    facilityAdmin: [
      {
        name: {
          type: string,
          required: true
        },
        phone: {
          type: string,
          trim: true,
        },
        email: {
          type: string,
          trim: true,
        },
      },
    ],
    // Shouldnt this be type user an array of ObjectId(users)?
    facilityAssociate: [
      {
        name: {
          type: string,
          required: true
        },
        phone: {
          type: string,
          trim: true,
        },
        email: {
          type: string,
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
      type: number,
    },

    buildingSizeIncluding: {
      type: number,
    },

    deletedAt: {
      type: date,
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
