const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
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

    //This needs to be linked to reservations model.
    reservations: {
        type: Array,
        required: [false],
    },
}, {timestamps: true});

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer;