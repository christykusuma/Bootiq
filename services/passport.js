// GOOGLE OAUTH -----------------------
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const config = require('../config/dev');
const mongoose = require('mongoose');
const user = mongoose.model('user');

//Create new instance of Google Strategy to add user to database
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('google.googleID', profile.id);
        user.findOne({ 'google.googleID': profile.id})
            .then(( existingUser ) => {
                if (existingUser) {
                    // Record with the given profile ID
                    done(null, existingUser);
                }
                else {
                    new user({
                      method: 'google',
                      google: {
                        googleID: profile.id,
                        fname: profile.name.givenName,
                        lname: profile.name.familyName,
                        email: profile.emails[0].value
                      }
                    }).save()
                    .then(user => done(null, user));
                }
            });
    })
);

//
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id }, config.secret);
}
