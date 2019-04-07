const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const surveyRouter = require('./routes/survey');
const app = express();
const data_init = require('./services/data-init-service');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.mongourl, function (err:any, db:any) {
  if (err) throw err;

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/survey', surveyRouter);

// catch 404 and forward to error handler
app.use(function (req:any, res:any, next:any) {
  next(createError(404));
});

// error handler
app.use(function (err:any, req:any, res:any, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
