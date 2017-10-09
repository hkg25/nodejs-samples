var fs = require('fs');
var calc = require('./calculator');

 var contents = fs.readFileSync('input.txt',{encoding:'utf-8'});
 //console.log(contents);
 var str_array = contents.split('\n');

  for(var i = 0; i < str_array.length; i++) {
       var data = str_array[i].split(',');
      console.log(data);
       console.log(calc.callFunction(data[0],data[1],data[2]));
   }



 fs.readFile('input.txt',{encoding:'utf-8'},function(err,content){
   var str_array = contents.split('\n');

   for(var i = 0; i < str_array.length; i++) {
       var data = str_array[i].split(',');
      //console.log(data);
       console.log(calc.callFunction(data[0],data[1],data[2]));
  }
 });

var stream = fs.createReadStream('input.txt',{encoding:'utf-8'});
var readCount = 0;
stream.on('data',function(chunk){
  ++readCount;
  process(chunk);
});

function process(content){
  var str_array = content.split('\n');
     for(var i = 0; i < str_array.length; i++) {
         var data = str_array[i].split(',');
         console.log(calc.callFunction(data[0],data[1],data[2]));
     }
}

stream.on('end',function(){
  console.log("Data processed successfully !!!");
  console.log('readCount is ->',readCount);
})
