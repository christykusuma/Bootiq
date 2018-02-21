// GOOGLE OAUTH -----------------------
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

// Setup cookie to track our User
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //Find user by googleId
  User.findById(id).then(user => {
        //callback to deserializeUser
        done(null, user);
  });
});

//Create new instance of Google Strategy to
//add user to database
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true 
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        // console.log('profile', profile);
        console.log('profile', profile.emails);
        User.findOne({ googleID: profile.id })
            .then(( existingUser ) => {
                if (existingUser) {
                    // We already have a record with the given profile ID
                    done(null, existingUser);
                } else {
                    // we don't have a user record with thi sID, make a new record
                    new User({
                        googleID: profile.id,
                        fname: profile.name.givenName, 
                        lname: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: profile.id,
                        isAdmin: false
                    }).save()
                    .then(user => done(null, user));
                }
            });
    })
);
