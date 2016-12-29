const express = require('express');
const compression = require('compression');
const path = require('path');
const spdy = require('spdy');
const fs = require('fs');
const ROOT = path.join(__dirname, '../../dist');

let filesToPush = [];
fs.readdir(ROOT, (error, data) => {
  data.forEach(name => {
    if (/bundle\.js\.gz/.test(name)) {
      filesToPush.push(name)
    }
  });
});

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(compression());
app.use(express.static(ROOT));
app.get('/*', (req, res) => {
  console.log(res.push);
  filesToPush.forEach((fileToPush) => {
    fs.readFile(path.join(ROOT, fileToPush), (error, data) => {
      let stream = res.push(`/${fileToPush}`, {
        req: {'accept': '**/*'},
        res: {'content-type': 'application/javascript'}
      });
      console.log(stream);
      stream.on('error', err => {
        console.log(err);
      });
      stream.end(data);
    });
  });
  fs.readFile(path.join(ROOT, 'index.html'), (error, data) => {
    res.writeHead(200);
    res.end(data);
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
