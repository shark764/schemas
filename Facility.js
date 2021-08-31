const mongoose = require("mongoose");
const { INDOOR,OUTDOOR,BOTH,FACEBOOK,INSTAGRAM,TWITER,TIKTOK} = require("./configs");
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

	//NEW FIELD FOR V2.10 of database
    facilityType: {
		type: String,
		enum: [INDOOR,OUTDOOR,BOTH],
		default: INDOOR,
	},

	//NEW FIELD FOR V2.10 of database
    socialMedia: [
		{
			name: {
				type: String,
				enum: [FACEBOOK,INSTAGRAM,TWITER,TIKTOK],
			},
			
			urlPath: {
				type: String
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

	//NEW FIELD FOR V2.10 of database
	nssfMember: {
		type: Boolean,
		default: false,
	},

	//NEW FIELD FOR V2.10 of database
	nssfRating: {
		type: Number,
	},
	
	//NEW FIELD FOR V2.10 of database
	facilityServices: [
		{
			iotEnabled: {
				type: Boolean,
				default: false,
			},
			
			memberships: {
				type: Boolean,
				default: false,
			},
			
			walkInUsers: {
				type: Boolean,
				default: false,
			},
			
			firearmRentals: {
				type: Boolean,
				default: false,
			},
			
			retailSales: {
				type: Boolean,
				default: false,
			},
			
			cafeteria: {
				type: Boolean,
				default: false,
			},
			
			training: {
				type: Boolean,
				default: false,
			},
			
			privateEvents: {
				type: Boolean,
				default: false,
			},
			
			organizedCompetition: {
				type: Boolean,
				default: false,
			},
			
			corporateHospitality: [
				{
					conferenceFacilities: {
						type: Boolean,
						default: false,
					},
					
					facilityRental: {
						type: Boolean,
						default: false,
					},
					
					vipLounge: {
						type: Boolean,
						default: false,
					},
				},
			],
		},
	],
    // MISSING
    // lineOfBussiness 
    // facilityLayoutIndoor 
  },
  { timestamps: true }
);

module.exports = facilitySchema;
