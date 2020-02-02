const User = require('../models/User');
const passport = require('passport');
const validator = require('validator');
const moment = require('moment');
exports.postSignup = (req, res) => {

  const strDate = moment().month(req.body.month).format("MM") + "-" + req.body.day + "-" + req.body.year;
  const date = moment(strDate).format('MM-DD-YYYY');
  console.log(req.body);
  User.register(new User({
    username: req.body.username,
    profile: {
      birthday: date
    }
  }), req.body.password, function(err, user) {
    if (err) {
      req.flash('error', {
        msg: err.message
      });
      res.redirect("/");
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/home");
      });
    }
  });
};
/**
 * GET /
 * Login page.
 */
exports.getLogin = (req, res) => {
  res.render('login', {
    title: 'Login'
  });
};
/**
 * Post /
 * Login request page.
 */
exports.postLogin = (req, res, next) => {

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err) {
    console.log()
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local', function(error, user, info) {
        // A error also means, an unsuccessful login attempt
        if (error) {
          console.error(error);
          console.log('Failed login:');
          // And do whatever you want here.
          return next(new Error('AuthenticationError'), req, res);
        }

        if (user === false) {
          // handle login error ...
          req.flash('error', {
            msg: info.message
          });
          res.redirect("/");
        } else {
          // handle successful login ...
          req.flash('success', {
            msg: "Successfully authenticated"
          });
          res.redirect('/home');
        }
      })(req, res, next);
    }
  });

};
exports.home = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("home");
  } else {
    res.redirect("/");
  }
};
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};
