const express      = require('express'),
      unless       = require('express-unless'),
      compression  = require('compression'),
      path         = require('path'),
      spdy         = require('spdy'),
      morgan       = require('morgan'),
      fs           = require('fs'),
      cookieParser = require('cookie-parser'),
      bodyParser   = require('body-parser'),
      jwt          = require('jsonwebtoken'),
      passport      = require("passport"),
      passportJWT   = require("passport-jwt");

const ExtractJwt  = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const ROOT = path.join(__dirname, '../../dist');

const routes   = require('./routes/index');
const auth     = require('./routes/auth');
const article  = require('./routes/article');
const category = require('./routes/category');

const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(ROOT, { maxAge: '1d' }));

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'secret';
jwtOptions.issuer = 'auth.gpost.vn';
jwtOptions.audience = 'gpost.vn';
jwtOptions.authScheme = 'Bearer';

passport.use(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload);
  var user = users[_.findIndex(users, {id: jwt_payload.id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

//app.use('/api', authenticate.unless({ path: '/api/auth' }));
app.use('/api/auth', auth);
// app.use('/api/article', article);
// app.use('/api/category', category);
app.use('/api/*', (req, res) => { res.status(404).send('Not found!'); });
app.use('/*', routes);

// Simple error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token!');
  } else {
    res.status(500).send('Something broke!');
  }
});

// Certificate for running http2 in ssl
const options = {
  key: fs.readFileSync(path.join(ROOT, '../certificate/server.key')),
  cert: fs.readFileSync(path.join(ROOT, '../certificate/server.crt'))
};

const server = spdy
  .createServer(options, app)
  .listen(port, () => {
    console.log(`Listening on: https://localhost:${server.address().port}`);
  });