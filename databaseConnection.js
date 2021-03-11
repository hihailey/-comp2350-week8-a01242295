const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://bcb8f4777120eb:c1b7cc61@us-cdbr-east-03.cleardb.com/heroku_5464de5de668d9a?reconnect=true

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "bcb8f4777120eb",
	password: "c1b7cc61",
	database: "heroku_5464de5de668d9a",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		