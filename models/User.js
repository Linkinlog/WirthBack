const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);