const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const db = require('./db.js');
const route = require('./router.js');

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname +'/html/bootstrapTemplate')

db();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'html/bootstrapTemplate')));
app.use('/', route);

app.use(bodyParser.urlencoded({
    extended: false
}));

const port = 3000;
app.listen(port, ()=> console.log('Server 3000 running'));