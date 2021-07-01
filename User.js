const  mongoose  = require('mongoose');
// Test shit out3
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,        
        required: false,
    },
    businessName: {
        type: String,
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