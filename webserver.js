var http = require('http'),
fs = require('fs'),
path = require('path');

http.createServer(function(req,res){
  var resource = path.join(__dirname,req.url === '/' ? '/index.html' : req.url);
  console.log("request is -->" , resource);
  if(fs.existsSync(resource)){
    var stream = fs.createReadStream(resource,{encoding:'utf-8'});
    // stream.on('data',function(chunk){
    //    res.write(chunk);
    // })
    // stream.on('end',function(chunk){
    //   res.end();
    // })
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }

}).listen(8080);

console.log("server listening on port 8080 !!!");
