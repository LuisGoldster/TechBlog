import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';

const app = express();
app.set('port', process.env.PORT || 80);
app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '..')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});