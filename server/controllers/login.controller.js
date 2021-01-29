const RegisterUser = require('../models/login.model')
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");


module.exports.createUser = (request, response) => {
    RegisterUser.create(request.body)
        .then(user => response.json(user))
        .catch(error => response.status(400).json(error))
}

module.exports.findAll = (request, response ) => {
    RegisterUser.find()
        .then(data => response.json( data))
        .catch(error => response.json({error: error}))
}


module.exports.isAuth = (req,res,next) => {
    const sessUser = req.session.user;
    if(sessUser) {
        next();
    }
    else {
        err = res.status(401).json("You Need to Be Logged in to do this. Access Denied ")
        return err;
    }
};

module.exports.loginUser = (req, res) => {
    const { email, password  } = req.body;

    // basic validation
    const result = RegisterUser.validate({ email, password });
    if (!result.error) {
        //check for existing user
        RegisterUser.findOne({ email }).then((user) => {
            if (!user) return res.status(400).json("Incorrect Email");

            // Validate password
            bcrypt.compare(password, user.password).then((isMatch) => {
                if (!isMatch) return res.status(400).json("Incorrect Password");

                const sessionUser = { id: user.id, name: `${user.firstName} ${user.lastName}`, email: user.email };
                req.session.user = sessionUser; // Auto saves session data in mongo store

                res.json(sessionUser); // sends cookie with sessionID automatically in response
            });
        });
    } else {
        console.log(result.error)
        res.status(422).json(result.error.details[0].message);
    }
};

module.exports.logoutUser = (req, res) => {
    req.session.destroy((err) => {
        // delete session data from store, using sessionID in cookie
        if (err) throw err;
        res.clearCookie("session-id"); // clears cookie containing expired sessionID
        res.send("Logged out successfully");
    });
}


module.exports.authChecker = (req, res) => {
    const sessionUser = req.session.user;
    if (sessionUser) {
        return res.json(sessionUser);
    } else {
        return res.status(401).json({ msg: "Unauthorized" });
    }
};

