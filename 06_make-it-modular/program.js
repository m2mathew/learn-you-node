var myModule = require('./mymodule.js');

myModule(process.argv[2], process.argv[3], function(err, data) {
	if(err) {
		return err;
	} else {

		for(var file in data) {
			console.log(data[file]);
		}
	}
});
