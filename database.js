var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Klonger1~",
  database: "lygma"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("Select * FROM game where title = 'Portal'", function (err, result, field) {
  	if(err) throw err;
  	console.log(result);
  });
});