var http = require('http'),
url = require('url'),
querystring = require('querystring'),
calc = require('./calculator');

var server = http.createServer(function(req,res){

  var urlObj = url.parse(req.url);

  if(urlObj.pathname === '/calculator'){

    var queryObj = querystring.parse(urlObj.query);
    var val = calc.callFunction(queryObj.op, queryObj.n1, queryObj.n2);
    console.log("Calculate value is -->", val);
    res.write('Calculated value is -->');
    res.write(val.toString());
    res.end();

  } else {

    res.write("Not valid");
    res.end();

  }
});

server.listen(8000);
