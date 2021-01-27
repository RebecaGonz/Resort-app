const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    //User also has the field of _id, which is automatically created upon generation.

    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation",
        required: [false],
    }],

    first_name: {
        type: String,
        required: [true, "Please enter a first name"],
    },

    last_name: {
        type: String,
        required: [true, "Please enter a last name"],
    },

    cell_number: {
        type: String,
        required: [false],
    },

    email: {
        type: String,
        required: [true, "Please enter a valid email"],
    },

    admin: {
        type: Boolean,
        required: [true, "please write 'true' or 'false' whether the user is an adminstrator or not."],
    },

}, {timestamps: true});

const User = mongoose.model('User', UserSchema)

module.exports = User;