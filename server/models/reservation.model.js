const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    
    //This needs to be linked to customer model.
    customer: {
        type: Array,
        required: [true, "Please enter a customer for this reservation."],
    },
    
    //We need a way to check that this is a valid date. We need to also tell the user the correct way to enter the date.
    date: {
        type: Date,
        required: [true, "Please enter today's date or a future date for the reservation."],
    },

    //This needs to be linked to the room model.
    room_number: {
        type: String,
        required: [false],
    },

    adult_rsvps: {
        type: Number,
        required: [true, "Please enter the number of adult reservations."],
    },

    //This needs to be linked to reservations model.
    children_rsvps: {
        type: Number,
        required: [true, "Please enter the number of child reservations."],
    },
}, {timestamps: true});

const Reservation = mongoose.model('Reservation', ReservationSchema)

module.exports = Reservation;