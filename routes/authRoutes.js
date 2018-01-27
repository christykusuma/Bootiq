
//Routes that require a user to be signed in

const passport = require('passport');

//GOOGLE LOGIN

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect("/");
  })

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect("/");
  });

  app.get('/api/current_user/', (req, res) => {
    res.send(req.user);
  });

}