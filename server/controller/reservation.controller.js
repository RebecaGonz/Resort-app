const Reservation = require('../models/reservation.model')

module.exports.getAllReservations = (_request, response) => {
    Reservation.find()
        .then(data => response.json({allRooms: data}))
        .catch(error => response.json({error: error}))
}

module.exports.createReservation = (request, response) => {
    Reservation.create(request.body)
        .then(data => response.json(data))
        .catch(error => response.status(400).json(error))
}

module.exports.getOneReservation = (request, response) => {
    Reservation.findById(request.params.id)
        .then(data => response.json(data))
        .catch(error => response.json({error: error}))
}

module.exports.deleteReservation = (request, response) => {
    Reservation.findByIdAndDelete(request.params.id)
        .then(() => response.json({success: true}))
        .catch(error => response.status(400).json(error))
}

module.exports.updateReservation = (request, response) => {
    Reservation.findByIdAndUpdate(
        request.params.id,
        request.body,
        {new: true, runValidators: true}
        )
        .then(updatedUser => response.json(updatedUser))
        .catch(error => response.status(400).json(error))
}