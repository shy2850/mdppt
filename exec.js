var mdppt = require('./nodePPT');
var fs = require('fs');

fs.readFile('demo/demo.mdppt', function(error, rs){
	var str = rs.toString();
	fs.writeFile('demo/index.html', mdppt(str));
});
