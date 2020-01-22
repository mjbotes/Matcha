var mysql = require('mysql');
const db = require('config');
var ct = require('./setup');
var credentials = {};
credentials.user = db.user;
credentials.host = db.host;
credentials.password = db.password;

const connectMySql = async () => {
	try {
		var con = await mysql.createConnection(credentials);

		console.log('MySql Connected...');

		con.connect(connection);

		function connection(err) {
			if (err) throw err;
			console.log("Connected!");
			con.query("CREATE DATABASE IF NOT EXISTS " + db.database, databaseCallback);
		}

		function databaseCallback(err, result) {
			if (err) throw err;
			console.log(result);
			console.log("Database created");

			ct(con);
		}
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
	return con;
};

module.exports = connectMySql;
