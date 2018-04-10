const router = require("express").Router();
const htmlRoutes = require("./html");

// Article routes
router.use(htmlRoutes);

module.exports = router;