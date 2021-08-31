const mongoose = require('mongoose')
const {ObjectId} = mongoose.Types


const END_USER = ObjectId("60b69237f3f097429801b598");
const DEFAULT_LEAGUE = ObjectId("60d2bad25470d551cc870e8d");
const ACTIVE = 'active';
const INACTIVE = 'inactive'
const PENDING = 'pending';
const USER = 'user'
const FACILITY = 'facility'
const PUBLIC = 'public';
const PRIVATE = 'private';
const CARD = 'card';
const INDOOR = 'indoor';
const OUTDOOR = 'outdoor';
const BOTH = 'both';
const FACEBOOK = 'facebook';
const INSTAGRAM = 'instagram';
const TWITTER = 'twitter';
const TIKTOK = 'tiktok';



module.exports={
    END_USER,
    ACTIVE,
    INACTIVE,
    PENDING,
    USER,
    FACILITY,
    PUBLIC,
    PRIVATE,
    DEFAULT_LEAGUE,
    CARD,
    INDOOR,
    OUTDOOR,
    BOTH,
    FACEBOOK,
    INSTAGRAM,
    TWITTER,
    TIKTOK
}