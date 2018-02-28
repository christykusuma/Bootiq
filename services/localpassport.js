// LOCAL LOGIN ------------------------------
const passport = require('passport');
const JwtStrategy = require ('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config/dev');
const keys = require('../config/keys');
const User = require('../models/User');

// Create local strategy:
const localOptions = { usernameField: 'email'}
const localLogin = new LocalStrategy( localOptions, function(email, password, done){
    User.findOne({'local.email': email}, function(err, user){
        // if there is an error when tryig to log in
        if (err) {return done(err); }
        // if the user info doesnt exists
        if (!user) { return done(null, false); }
        user.comparePassword(password, function(err, isMatch) {
            if(err) { return done(err); }
            if (!isMatch) { return done(null, false);}
            return done(null, user);
        });
    });
});

// Setup Options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('auth'),
    secretOrKey: config.secret
};
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err,user) {
        if (err) { 
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// Tell passport to use this strategy:
passport.use(jwtLogin);
passport.use(localLogin);
