/*function addPortal(){

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
}
*/

function addPortal(){

  const game = {idmylist: 1, games: 'Portal' };

  con.query('INSERT INTO mylist SET ?', game, (err, res) => {
    if(err) throw err;

    console.log('Last insert ID:', res.insertID);
  });
}