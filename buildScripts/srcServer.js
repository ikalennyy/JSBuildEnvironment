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

app.get('/', function(request, response){
        response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(error){
    if(error){
        console.log(error);
    }
    open('http://localhost:' + port);
});
