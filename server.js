var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(app.get('port') || 3000);