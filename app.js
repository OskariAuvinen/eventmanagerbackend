var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const eventsRouter = require('./routes/events');
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/events', eventsRouter);
app.use('/api/auth', authRouter);
app.use('/api/auth', userRouter)

function initial() {
  Role.create({
      id: 1,
      name: "user"
  });
}

const db = require("./models");
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
console.log('Drop and Resync Db');
initial();
});

app.get("/", (req, res) => {
  res.json({ message: "Eventmanagerdemo - backend server" });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
