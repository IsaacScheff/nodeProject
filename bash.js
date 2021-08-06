process.stdout.write('prompt > ');
const ls = require('./ls.js');
const pwd = require('./pwd.js');
const cat = require('./cat.js');
const curl = require('./curl.js');
const { builtinModules } = require('module');

function done(output){
    console.log(output);
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd == 'pwd'){
        pwd(done);
    }else if(cmd == 'ls'){
        ls(done);
    }else if(cmd.includes('cat')){
        let args = cmd.split(' ');
        cat(args[1], done);
    }else if(cmd.includes('curl')){
        let args = cmd.split(' ');
        curl(args[1], done);
    }else{   
    process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});

//module.exports = done;