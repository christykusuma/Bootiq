// Routes that require a user to be signed in

const passport = require('passport');

//GOOGLE LOGIN

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get(
      '/auth/google/callback', 
      passport.authenticate('google'), 
      (req, res) => {
            res.redirect('/');
        }
    );

  app.get('/api/current_user/', (req, res) => {
    res.send(req.user);
  });

};

// const Authentication = require('../controllers/authentication');
// const passportService = require('../services/passport');
// const passport = require('passport');

// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

// module.exports = function(app) {
//     app.get('/', requireAuth, function(req, res) {
//         res.send({ message: 'Super secret code is ABC123' });
//     });
//     app.post('/signin', requireSignin, Authentication.signin);
//     app.post('/signup', Authentication.signup);
// }