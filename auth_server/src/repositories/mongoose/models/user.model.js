const mongoose = require('mongoose');

//create a user schema with name, email, password, photo, roles

const userSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    roles: {
        type: [String],
        default: ['user']
    },
    active:{
        type: Boolean,
        default: false
    }
}
//,{strict:false}
);

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;