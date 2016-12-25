let express     = require('express'),
    compression = require('compression'),
    http2       = require('spdy'),
    path        = require('path'),
    fs          = require('fs');

let app = express();
app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '../dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!')
// })

var options = {
  key: fs.readFileSync(path.join(__dirname, '../certificate/server.key')),
  cert: fs.readFileSync(path.join(__dirname, '../certificate/server.crt'))
}

http2
  .createServer(options, app)
  .listen(80, () => {
    console.log("Server is listening on https://localhost:80");
  }
)
