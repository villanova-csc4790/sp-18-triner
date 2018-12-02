//app.js

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';

// use dotenv
dotenv.config({
  silent: true,
});

// Express app setup
const app = express();

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// logger
app.use(logger('combined'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// use routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Klonger1~",
  database: "lygma"
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to database');

    return;
  }
  console.log('Connection Established');
});


con.query('SELECT * FROM game', (err, rows) => {

  console.log('Data received:\n');
  console.log(rows);

})

  const game = {idmylist: 1, games: 'Portal' };

  con.query('INSERT INTO mylist SET ?', game, (err, res) => {
    if(err) throw err;

    console.log('Last insert ID:', res.insertID);
  });


con.end((err) => {});
export default app;