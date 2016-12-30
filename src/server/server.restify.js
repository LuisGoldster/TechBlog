const restify = require('restify'),
      path    = require('path'),
      fs      = require('fs');

const ROOT = path.join(__dirname, '../../dist');
const PORT = process.env.PORT || 8080;

const server = restify.createServer({
  certificate: fs.readFileSync(path.join(ROOT, '../certificate/server.crt')),
  key: fs.readFileSync(path.join(ROOT, '../certificate/server.key')),
  name: 'TechBlog',
});

server.use(restify.gzipResponse());

server.get(/.*/, (req, res) => {
  res.send(path.join(ROOT, 'index.html'));
});

server.get(/.*/, restify.serveStatic({
  'directory': ROOT,
  'default': 'index.html'
}));

server.listen(PORT, () => {
  console.log(`Listening on: https://localhost:${server.address().port}`);
});