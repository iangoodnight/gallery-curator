const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");

router.route("/")
  .post(artistsController.create);

module.exports = router;