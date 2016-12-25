let express     = require('express'),
    compression = require('compression'),
    path        = require('path');

let app = express();
app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '../dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(80, () => {
  console.log('Example app listening on port 80!')
});