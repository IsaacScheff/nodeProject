const fs = require('fs');
//const utf8 = require('utf8');
const cat = require('cat');
//import { fstat, readFile } from 'fs';

function catF(fileName, done) {
  fs.readFile(`./${fileName}`,'utf8', (err, data) => {
    if (err) throw err;
    done(data)
  });
}

//cat('myfile.txt', console.log);     
//function catF(fileName){
   // return cat(`./${fileName}`, console.log); 
//}

//function catF(fileName, done){
  //  return done(Buffer.from(cat(`./${fileName}`), 'utf-8').toString()); 
//}

module.exports = catF;