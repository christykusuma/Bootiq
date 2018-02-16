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
                        lname: profile.name.familyName
                    }).save()
                    .then(user => done(null, user));
                }
            });
    })
//     // Promise
//     async (accessToken, refreshToken, profile, done) => {
    
//     //Find an existing user
//     const existingUser = await user.findOne({googleID: profile.id});

//         // If found, skip user creation and return user
//         if (existingUser) {
//             console.log('existing user');
//             // We already have a record with the given profile ID
// 			// done(null, existingUser);
//         } else {
//             console.log('new user');
//             // Make a new record
//             // const user = await new User({ 
//             //     googleID: profile.id, 
//             //     fname: profile.name.givenName, 
//             //     lname: profile.name.familyName
//             // }).save();
//             // done(null, user);	
//         }
//   })
);

// const passport = require('passport');
// const User = require('../models/user');
// const config = require('../config/keys');
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const LocalStrategy = require('passport-local');

// // Create local strategy
// const localOptions = { usernameField: 'email' };
// const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
//     // Verify this username and password, call done with the user
//     // if it is the correct username and password
//     // otherwise, call done with false
//     User.findOne({ email: email }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }

//         // compare password - is 'password' equal to user.password?
//         user.comparePassword(password, function(err, isMatch) {
//             if (err) { return done(err); }
//             if (!isMatch) { return done(null, false); }

//             return done(null, user);
//         })
//     });
// });


// // Setup options for JWT Strategy
// const jwtOptions = {
//     jwtFromRequest: ExtractJwt.fromHeader('authorization'),
//     secretOrKey: config.secret
// };

// // Create JWT strategy
// const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
//     // See if the user ID in the payload exists in our database
//     // If it does, call 'done with that other
//     // otherwise, call done without a user object
//     User.findById(payload.sub, function(err, user) {
//         if (err) { return done(err, false); }

//         if (user) {
//             done(null, user);
//         } else {
//             done(null, false);
//         }
//     });
// });

// // Tell passport to use this strategy
// passport.use(jwtLogin);
// passport.use(localLogin);
