const roomController = require('../controllers/room.controller');
const reservationController = require('../controllers/reservation.controller');
const userController = require('../controllers/user.controller');

module.exports = function(app) {

//Room Table Routes
    app.get('/room/findAll', roomController.findAll);
    app.post('/room/create', roomController.create);
    app.get('/room/findOne', roomController.findOne);
    app.delete('/room/deleteOne', roomController.deleteOne);
    app.post('/room/updateOne', roomController.updateOne);
//User Table Routes
//     app.get('/user/findAll', userController.getAll);
//     app.post('/user/create', userController.create);
//     app.get('/user/findOne', userController.findOne);
//     app.delete('/user/deleteOne', userController.deleteOne);
//     app.post('/user/updateOne', userController.updateOne);

// //Reservation Table Routes
//     app.get('/reservation/findAll', reservationController.getAll);
//     app.post('/reservation/create', reservationController.create);
//     app.get('/reservation/findOne', reservationController.findOne);
//     app.delete('/reservation/deleteOne', reservationController.deleteOne);
//     app.post('/reservation/updateOne', reservationController.updateOne);
};