var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app'),
	path = require('path'),
	chalk = require('chalk');


app.use(dataParser);
app.use(serveStatic(path.join(__dirname,'/public')));
app.use(calculatorReqHandler);
app.use(notFoundHandler);

var server = http.createServer(app).listen(8080);

console.log(chalk.bold.blue('server listening on 8080!!'));
