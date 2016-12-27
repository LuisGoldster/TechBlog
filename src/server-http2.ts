import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';
import * as spdy from 'spdy';
import * as fs from 'fs';

const app = express();
app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '..')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const options = {
  key: fs.readFileSync(path.join(__dirname, '../../certificate/server.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../certificate/server.crt'))
}

spdy
  .createServer(options, <any> app)
  .listen(8080, () => {
    console.log("Server is listening on https://localhost:8080");
  }
)
