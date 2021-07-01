const  mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw(errorObj(401));
            }
        }
    },
    password: {
        type: String,        
        required: false,
    },
    businessName: {
        type: String,
        //required: false,
        trim: true
    },
    firstName: {
        type: String,
        required: false,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    displayName: {
        type: String,
        required: false,
        trim: true
    }, 
    providerId: {
        type: String,
        trim: true
    },
    provider: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        default: 'Customer',
        trim: true
    },
    active: {
        type: Boolean,
        default: false
    }
})

module.exports= userSchema