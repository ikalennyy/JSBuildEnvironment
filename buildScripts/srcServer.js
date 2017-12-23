import express from 'express';
import path from 'path';
//var open = require('open');
//ES 6 Syntax, Babel will transpire
import open from 'open';

//for bundling
import webpack, { Compiler } from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
// const is ES 6 for var
const app = express();
const complier = webpack(config);

app.use(require('webpack-dev-middleware')(complier,{
    noInfo:true,
    publicPath: config.output.publicPath // our variable path from config
}));


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
        response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(error){
    if(error){
        console.log(error);
    }
    open('http://localhost:' + port);
});
