var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var newString = buf.toString();

newString = newString.split('\n');

console.log(newString.length-1);
