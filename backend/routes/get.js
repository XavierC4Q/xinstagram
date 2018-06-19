var express = require('express');
var router = express.Router();
var db = require('../database/getrequest');
const { loginRequired } = require("../auth/helpers");

router.get('/logout', loginRequired, db.logout)
router.get('/user', loginRequired, db.getUser)
router.get('/allusers', db.getAllUsers)


module.exports = router;
