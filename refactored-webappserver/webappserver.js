var dataparser = require('./dataparser'),
		serveStatic = require('./serveStatic'),
		calculatorHandler = require('./calculatorHandler'),
		notFoundHandler = require('./notFoundHandler'),
		http = require('http');

var server = http.createServer(function(req, res){


	var reqObj =  dataparser.parseRequestObjectFromRequest(req);
	var resource = dataparser.parseResourceFromReq(reqObj);

	console.log(resource);
	console.log(reqObj);

	if (serveStatic.isStatic(resource)){

		serveStatic.staticRequestServe(resource,res);
		res.end();

	} else if (reqObj.pathname === '/calculator' && req.method === 'GET'){

		var reqData = dataparser.parseQuery(reqObj);
		calculatorHandler.calculate(reqData,res);
		res.end();

	} else if (reqObj.pathname === '/calculator' && req.method === 'POST'){

		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var reqData = dataparser.parseQuery(reqObj);
			calculatorHandler.calculate(reqData,res);
			res.end();
		});

	} else {

		notFoundHandler.notFoundHandle(res);
		res.end();

	}
});

server.listen(8080);

console.log('server listening on 8080!!');
