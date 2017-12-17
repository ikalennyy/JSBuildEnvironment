//register Babel to transpile before the tests run
require ('babel-register')();

//Disable any web-pack related features that Mocha does not understand
require.extensions['.css].'] = function (){}; // just treat it as an empty function
