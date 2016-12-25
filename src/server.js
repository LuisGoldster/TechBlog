var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();

app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})