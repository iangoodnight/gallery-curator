const db = require("../models");

// Defining methods for the artController
module.exports = {
	find: function(req, res) {
		db.Art
			.find({ "_userId": req.params.id })
			.then(dbModel => res.json(dbModel))
	    .catch(err => res.status(422).json(err));		
	},

  findAll: function(req, res) {
    db.Art
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Art
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Art
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};