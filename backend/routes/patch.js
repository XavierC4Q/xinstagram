var express = require('express');
var router = express.Router();
var db = require('../database/patchrequest');
const { loginRequired } = require("../auth/helpers");


router.patch('/useredit/:userID', loginRequired, db.editUser)

module.exports = router;
