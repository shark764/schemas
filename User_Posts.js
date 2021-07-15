const mongoose = require("mongoose");

const userPostsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    urlMedia: {
      type: String,
      trim: true,
    },
    publishDate: {
      type: Date,
      default: Date.now(),
    },
    caption: {
      type: String,
    },
    title: {
      type: String,
    },
    // this is groupId
    groupsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Groups",
    },
    // THIS IS Status
    status: {
      type: String,
      enum: [ACTIVE, INACTIVE],
      default: ACTIVE,
    },
    //  Do we need this? since we already have a field called 'updatedAt'
    updatedDate: {
      type: Date,
      default: Date.now,
    },

    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "users",
        },
        publishDate: {
          type: Date,
          default: Date.now(),
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = userPostsSchema;
