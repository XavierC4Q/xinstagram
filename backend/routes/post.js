var express = require('express');
var router = express.Router();
var db = require('../database/postrequest');
const { loginRequired } = require("../auth/helpers");

router.post('/login', db.loginUser)
router.post('/register', db.registerUser)

module.exports = router;
