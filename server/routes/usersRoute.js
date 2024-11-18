const express = require("express");
const router = express.Router();
const controller = require('../authcontrol/controller')
const User = require("../models/user");



/*..........................................login.................................................... */
router.post("/login",controller.login);

module.exports = router;




