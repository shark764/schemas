const mongoose = require('mongoose');
const waiverFormSchema = new mongoose.Schema(
  {
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'facilities',
      required: true,
    },

    status: {
      type: Boolean,
      default: false,
    },

    dueDate: {
      type: Date,
      default: Date.now(),
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },

    users: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users',
          required: true,
        },
        dateTime: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = waiverFormSchema;
