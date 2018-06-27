var express = require('express');
var router = express.Router();
var db = require('../database/postrequest');
const { loginRequired } = require("../auth/helpers");

router.post('/login', db.loginUser)
router.post('/register', db.registerUser)
router.post('/postphoto', loginRequired, db.postPhoto)
router.post('/follow', loginRequired, db.folllowUser)

module.exports = router;
