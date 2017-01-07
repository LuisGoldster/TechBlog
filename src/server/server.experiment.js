const express = require('express'),
  compression = require('compression'),
  path = require('path'),
  spdy = require('spdy'),
  morgan = require('morgan'),
  fs = require('fs');

const NEO_ASYNC = require('neo-async');
const ROOT = path.join(__dirname, '../../dist');

let filesToPush = [];
fs.readdir(ROOT, (error, data) => {
  data.forEach(name => {
    // Map all static resource required by index.html
    if (/bundle\.js/.test(name)) {
      filesToPush.push(name);
    }
  });
});

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(morgan('dev'));
app.use(compression());
app.use(express.static(ROOT));

app.use((req, res, next) => {

  // Create assets to push
  let assets = filesToPush
    .map((fileToPush) => {
      let fileToPushPath = path.join(ROOT, fileToPush);
      return (callBack) => {
        fs.readFile(fileToPushPath, (error, data) => {
          if (error) return callBack(error);
          try {
            res.push(`/${fileToPush}`, {
              request: {
                'accept': '*/*',
                'accept-encoding': 'gzip'
              },
              response: {
                'content-type': 'application/javascript',
                'content-encoding': 'gzip'
              }
            }).end(data);
            callBack();
          } catch (e) {
            callBack(e);
          }
        });
      };
    });

  // Append last asset: index.html
  assets.unshift((callBack) => {
    fs.readFile(path.join(ROOT, 'index.html'), (error, data) => {
      if (error) return callBack(error);
      res.write(data);
      callBack();
    });
  });

  // Wait all assets run in parallel
  NEO_ASYNC.parallel(assets, (results) => {
    res.end();
  });

});

const options = {
  key: fs.readFileSync(path.join(ROOT, '../certificate/server.key')),
  cert: fs.readFileSync(path.join(ROOT, '../certificate/server.crt'))
};

const server = spdy
  .createServer(options, app)
  .listen(app.get('port'), () => {
    console.log(`Listening on: https://localhost:${server.address().port}`);
  });