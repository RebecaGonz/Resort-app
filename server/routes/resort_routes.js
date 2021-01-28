const roomController = require('../controller/room.controller');
const reservationController = require('../controller/reservation.controller');
const userController = require('../controller/user.controller');
const registerController = require('../controller/login.controller');

module.exports = function(app){

//Room Table Routes
    app.get('/room/findAll', roomController.findAll);
    app.post('/room/create', roomController.create);
    app.get('/room/findOne', roomController.findOne);
    app.delete('/room/deleteOne', roomController.deleteOne);
    app.post('/room/updateOne', roomController.updateOne);
// User Table Routes
    app.get('/user/findAll', userController.getAllUsers);
    app.post('/user/create', userController.createUser);
    app.get('/user/findOne', userController.getOneUser);
    app.delete('/user/deleteOne', userController.deleteUser);
    app.post('/user/updateOne', userController.updateUser);

// Reservation Table Routes
    app.get('/reservation/findAll', reservationController.getAllReservations);
    app.post('/reservation/create', reservationController.createReservation);
    app.get('/reservation/findOne', reservationController.getOneReservation);
    app.delete('/reservation/deleteOne', reservationController.deleteReservation);
    app.post('/reservation/updateOne', reservationController.updateReservation);

//Login Table Routes
    app.post('/register', registerController.createUser);
}