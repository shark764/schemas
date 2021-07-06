const mongoose = require("mongoose");
const { END_USER } = require("./configs");
const userSchema = new mongoose.Schema({
  userName: {
    type: string,
    trim: true,
    unique: true,
    required: true,
  },
  nickName: {
    type: string,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [{ type: Number }],
  },
  lastLoginDate: {
    type: Date,
    default: Date.now(),
  },
 
  userProfile: {
    about: {
      type: String,
    },
    photo: {
      type: String,
    },
    coverPhoto: {
      type: String,
    },
  },
  // This is roleId
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roles",
    default: END_USER,
  },

  providerId: {
    type: String,
    trim: true,
  },
  provider: {
    type: String,
    trim: true,
  },
  // This is verifiedAccount
  active: {
    type: Boolean,
    default: false,
  },

  // businessName: {
  //     type: String,
  //     trim: true
  // },
  // firstName: {
  //     type: String,
  //     required: false,
  //     trim: true
  // },
  // lastName: {
  //     type: String,
  //     required: false,
  //     trim: true
  // },
  // displayName: {
  //     type: String,
  //     required: false,
  //     trim: true
  // },
},{timestamps: true});

module.exports = userSchema;
