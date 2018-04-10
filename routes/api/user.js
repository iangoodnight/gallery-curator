const express = require('express');
const passport = require('passport');
const router = require("express").Router();
const userController = require("../../controllers/userController");
const artController = require("../../controllers/artController");
const mustBeLoggedIn = require('../../middleware/mustBeLoggedIn');

function getCurrentUser(req, res) {
  // I'm picking only the specific fields its OK for the audience to see publicly
  // never send the whole user object in the response, and only show things it's OK
  // for others to read (like ID, name, email address, etc.)
  const { id, user } = req.user;
  res.json({
    id, user
  });
}

router.route('/auth')
  // GET to /api/auth will return current logged in user info
  .get((req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'You are not currently logged in.'
      })
    }

    getCurrentUser(req, res);
  })
  // POST to /api/artist/auth with username and password will authenticate the user
  .post(passport.authenticate('local'), (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Invalid username or password.'
      })
    }

    getCurrentUser(req, res);
  })
  // DELETE to /api/artist/auth will log the user out
  .delete((req, res) => {
    req.logout();
    req.session.destroy();
    res.json({
      message: 'You have been logged out.'
    });
});

// Matched with "api/"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matched with "api/:id"
router
	.route("/:id")
	.get(userController.findById);

// Matched with "api/image"
router
  .route("/image")
  .post(artController.create);

// Matched with "api/artists/:username"
router
  .route("/artists/:username")
  .get(userController.findByName);

router
  .route("/image/:id")
  .get(artController.find);

// Matched with "api/gallery/all"
router
  .route("/gallery/all")
  .get(artController.findAll);

module.exports = router;