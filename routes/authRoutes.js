// Routes that require a user to be signed in
const passport = require('passport');
const jwt = require('jwt-simple');
const passportService = require('../services/passport')
const config = require('../config/dev');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

// Creating token for user
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ 
      sub: user.id,
      admin: user.admin
  }, config.secret);
}

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('auth'),
    secretOrKey: config.secret
};

// Google login
module.exports = (app) => {

  // Authentication
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  // Logout
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Callback for login
  app.get(
      '/auth/google/callback',
      passport.authenticate('google', {
        session: false,
        successRedirect : '/',
        failureRedirect : '/'
  }),
      (req, res) => {
        console.log(token);
        res.json({ token: tokenForUser(user) })
        res.cookie('auth', token); // Choose whatever name you'd like for that cookie,
        res.redirect('/');
        }
    );
};
