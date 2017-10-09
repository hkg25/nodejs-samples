var path = require('path'),
url = require('url'),
querystring = require('querystring');

var dataparser = {

  parseRequestObjectFromRequest : function(req){
      var reqObj = url.parse(req.url);
      return reqObj;
  },

  parseResourceFromReq : function(reqObj){
  	var resource = reqObj.pathname === '/' ? '/index.html' : reqObj.pathname;
    return resource;
  },

   parseQuery : function(reqObj){
    var reqData = querystring.parse(reqObj.query);
    return reqData;
  }

};

module.exports = dataparser;
