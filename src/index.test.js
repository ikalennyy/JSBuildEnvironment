import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // file system for node
import { userInfo } from 'os';


                         //function()
describe('Our first test', () =>{
    //a callback
    it('should pass', function() {
        expect(true).to.equal(true);
    });
});


describe('index.html', () => {
 it('shoud say h1 that says Users', (done) =>{

    // get a reference to the index.html
    const indexFile = fs.readFileSync('./src/index.html','utf-8');

     //load our index.html into the virtual dom and pass two objects: error and browser virtual window
    jsdom.env(indexFile, function(error, window){
                   //get the array of h1 elements on the page, get first one
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Users');
        //NOTE: the test will run asynchronously so we need to tell Mocha when we are done setting up.
        done();//matches the parameter passed (can be named anything)
        window.close(); // free up the resources
    });
 });
});
