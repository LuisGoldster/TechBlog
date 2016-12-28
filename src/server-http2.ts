import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';
import * as spdy from 'spdy';
import * as fs from 'fs';

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '..')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const options = {
  key: fs.readFileSync(path.join(__dirname, '../../certificate/server.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../certificate/server.crt'))
};

const server = spdy
  .createServer(options, app as any)
  .listen(app.get('port'), () => {
    console.log(`Listening on: https://localhost:${server.address().port}`);
  });
