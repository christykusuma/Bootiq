// Controller to Login and Signup on DB:
const User = require('../models/User');
const jwt = require('jwt-simple');
const config = require('../config/dev');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id }, config.secret);
}

exports.signin = function (req, res, next) {
    res.send ( { token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const dob = req.body.dob;
    const city = req.body.city;
    const country = req.body.country;
    if (!email || !password) {
        return res.status(422).send({error: 'You must provide email and password'});
    }
    // See if a user with a give email exists
    User.findOne({ 'local.email': email }, function(err,existingUser) {
        if (err) { return next(err);}
        if (existingUser) {
            return res.status(422).send({ error: "Email is in use" });
        }
    });
    // If user with email does exist, return an error
    const user = new User({
        method: 'local',
        local: {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            dob: dob,
            city: city,
            country: country
        }
    });
    // If a user with Email does NOT exist  create and save user record
    user.save( function(err) {
        if (err) { return next(err); }
        // Respond to request indicating the user was created
        res.json({token : tokenForUser(user) });
    });
};
