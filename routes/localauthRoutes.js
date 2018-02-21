// For LocalUser login:
const Auth = require('../controllers/authentication');
const passportService = require('../services/localpassport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id }, config.secret);
}
// For LocalUser Login (above)

module.exports = (app) => {
// Local Login/Signup:
  app.post('/api/signin', requireSignin, Auth.signin);
  app.post('/api/signup', Auth.signup);
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
    });
};