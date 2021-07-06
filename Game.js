const mongoose = require("mongoose");
const {DEFAULT_LEAGUE} = require('./configs')
const gameSchema = new mongoose.Schema({
  // this is userFacilitiesId
  userFacilityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    default: DEFAULT_LEAGUE
  },

  controllerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
//   Missing Devices[]
});

module.exports = gameSchema;
