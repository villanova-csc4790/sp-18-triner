var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "Klonger1~",
database: "lygma"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO mylist (idmylist ,games) VALUES ('1', 'Portal')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});