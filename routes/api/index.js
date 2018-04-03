const router = require("express").Router();
const artistRoutes = require("./artists");
const submitRoutes = require("./submit");

// Article routes
router.use("/submit", submitRoutes);

module.exports = router;