var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/xinstagram";
var db = pgp(connectionString);

module.exports = db;
