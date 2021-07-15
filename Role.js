const mongoose = require("mongoose");
const rolesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    readOnly: {
      type: Boolean,
      default: true,
    },
    //   this is Permissions
    permissions: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "permissions",
        },
      ],
    },

    deletedAt: {
      type: Number,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },

    deletedBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = rolesSchema;
