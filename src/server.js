var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');

app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '../dist'), {
  setHeaders: function (res) {
    res.setHeader('Content-Encoding', 'gzip');
  }
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})