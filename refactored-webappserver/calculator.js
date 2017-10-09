var calculator = {

add : function(x,y){
  return x + y;
},

subtract : function(x,y){
  return x - y;
},

multiply : function(x,y){
  return x * y;
},

divide : function(x,y){
  return x / y;
},

callFunction: function(fname,param1,param2){

    switch(fname){
      case "add" : return this.add(parseInt(param1),parseInt(param2));
      case "subtract" : return this.subtract(parseInt(param1),parseInt(param2));
      case "multiply" : return this.multiply(parseInt(param1),parseInt(param2));
      case "divide" : return this.divide(parseInt(param1),parseInt(param2));
    }
}

};

//console.log('@Calcualtor.js -->', calculator);

module.exports = calculator;
