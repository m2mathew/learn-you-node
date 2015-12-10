var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, function() {

	fs.readdir(dir, function callback(err, list) {
	if(err){
		return err;
	}

	for(var i = 0; i < list.length; i++){
		if(path.extname(list[i]) === '.' + ext) {
			console.log(list[i]);
		}
	}
});
