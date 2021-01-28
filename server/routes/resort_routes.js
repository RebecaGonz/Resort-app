const roomController = require('../controller/room.controller');
const reservationController = require('../controller/reservation.controller');
const userController = require('../controller/user.controller');
const registerController = require('../controller/login.controller');

module.exports = function(app){

//Room Table Routes
    app.get('/room/findAll', roomController.findAll);
    app.post('/room/create', roomController.create);
    app.get('/room/findOne/:id', roomController.findOne);
    app.delete('/room/deleteOne/:id', roomController.deleteOne);
    app.put('/room/updateOne/:id', roomController.updateOne);
// User Table Routes
    app.get('/user/findAll', userController.findAll);
    app.post('/user/create', userController.create);
    app.get('/user/findOne/:id', userController.findOne);
    app.delete('/user/deleteOne/:id', userController.deleteOne);
    app.put('/user/updateOne/:id', userController.updateOne);

// Reservation Table Routes
    app.get('/reservation/findAll', reservationController.findAll);
    app.post('/reservation/create', reservationController.create);
    app.get('/reservation/findOne/:id', reservationController.findOne);
    app.delete('/reservation/deleteOne/:id', reservationController.deleteOne);
    app.put('/reservation/updateOne/:id', reservationController.updateOne);

//Login Table Routes
    app.post('/register', registerController.createUser);
}