var routes = require('./routes/index');
var users = require('./routes/users');
var express = require('express');

const app = express();

app.use('/',routes);
app.use('/users',routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log('server running'));