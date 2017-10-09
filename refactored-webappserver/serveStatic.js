var fs = require('fs'),
path = require('path');


var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.json'];

var serveStatic = {

  isStatic : function(resource){
  	return staticResExtns.indexOf(path.extname(resource)) !== -1;
  },

  staticRequestServe : function(resource,res){
    var resourcePath = path.join(__dirname, resource);
    console.log(resourcePath);

    if (!fs.existsSync(resourcePath)){
      res.statusCode = 404;
    }
    fs.createReadStream(resourcePath).pipe(res);
  }
};

module.exports = serveStatic;
