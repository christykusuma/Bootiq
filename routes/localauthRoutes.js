// For LocalUser login:
const passport = require('passport');
const passportService = require('../services/localpassport');
const Auth = require('../controllers/auth');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

// For LocalUser Login (above)
module.exports = (app) => {
// Local Login/Signup:
  app.post('/api/signin', requireSignin, Auth.signin);
  app.post('/api/signup', Auth.signup);
  // app.get('/api/logout', (req, res) => {
  //   req.logout();
  //   res.redirect('/');
  //   });
};
