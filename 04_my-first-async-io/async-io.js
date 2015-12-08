var fs = require('fs');

var buf = fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(!err) {
		var newString = data.split('\n');

		console.log(newString.length-1);
	}
});
