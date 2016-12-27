import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';

const app = express();
app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '..')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(80, () => {
  console.log('Example app listening on port 80!')
});