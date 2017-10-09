var fs = require('fs');

var contents = fs.readFileSync('sample.txt',{encoding:'utf-8'});

//console.log(contents);
//console.log("================Thats all folks!!================")


fs.readFile('sample.txt',{encoding:'utf-8'},function(err,content){
  //console.log(content);
//  console.log("================Thats all Async folks!!================");
});


var stream = fs.createReadStream('sample.txt',{encoding:'utf-8'});

/* readable Stream events -> open,data,close,end,error*/
var readCount = 0;

stream.on('data',function(chunk){
  ++readCount;
  console.log(chunk);
});

stream.on('end',function(){
  console.log("================Thats all folks!!================");
  console.log('readCount = ', readCount);
});
