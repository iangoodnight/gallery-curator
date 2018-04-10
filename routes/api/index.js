const router = require("express").Router();
const userRoutes = require("./user");

// Article routes
router.use(userRoutes);

module.exports = router;