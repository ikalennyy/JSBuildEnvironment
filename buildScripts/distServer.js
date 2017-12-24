//TO SERVER THE DIST FOLDER
// NO WEBPACK HERE, we serve static files only

// this file exists so we can serve our production LOCALLY in case we have to debug and check our configuration

import express from 'express';
import path from 'path';
//var open = require('open');
//ES 6 Syntax, Babel will transpire
import open from 'open';
import compression from 'compression'

/*eslint-disable no-console */

const port = 3000;
// const is ES 6 for var
const app = express();

// for gzip
app.use(compression());

// support for serving of static files
app.use(express.static('dist'));

// http calls routes
app.get('/users', function(req, res) {
    // Hard coding for simplicity. PRETEND this hits a PRODUCTION database
    // in a real world, it would call DB or a service
    res.json([
      {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
      {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
      {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
    ]);
  });
//


app.get('/', function(request, response){
        response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(error){
    if(error){
        console.log(error);
    }
    open('http://localhost:' + port);
});
