const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");
console.log("hitting /api/submit route");
router.route("/")
  .post(artistsController.create);

module.exports = router;