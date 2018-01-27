const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('user');



// Setup cookie to track our User
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {

  //Find user by googleId
  User.findById(id)
  .then(userFound => {
    //callback to deserializeUser
    done(null, userFound);
  });
});

//Create new instance of Google Strategy to
//add user to database

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true 
},

  //Promise
  async (accessToken, refreshToken, profile, done) => {
    
    //Find an existing user
    const exisitingUser = await user.findOne({googleId: profile.id});

    //If found, skip user creation and return user
    if(exisitingUser){
      return done(null, exisitingUser);
    }

    //Make new google user if no user is found

    const newGoogleUser = await new User({
      googleId: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName
    }).save();
    done(null, newGoogleUser);
  }

))