
var notFoundHandler = {
   notFoundHandle : function(res){
    res.statusCode = 404;
    return res;
  }
};

module.exports = notFoundHandler;
