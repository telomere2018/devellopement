var express = require('express');
var app = express();
var path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var nunjucks  = require('nunjucks');
var multer = require('multer');
var fs = require('fs');

nunjucks.configure('views', {
	autoescape: true,
	express: app
});
var upload = multer({
    dest :__dirname + '/uploads'
});

//tester pour voir 
//app.set('view engine', 'ejs');

//connect to MongoDB
mongoose.connect('mongodb://localhost/testForAuth');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});
//pour aller charger les fichiers téléchargés
app.use('uploads',express.static(__dirname +'/uploads'));
//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
 app.use(express.static(__dirname + '/monCss'));
 app.use(express.static(__dirname + '/javascript'));
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//ici file est le nom de l'input du formulaire
app.use(upload.single('file'));

// serve static files from template
app.use(express.static(__dirname + '/templateLogReg'));

// include routes
var routes = require('./routes/routeTelomere');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found error 404');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});