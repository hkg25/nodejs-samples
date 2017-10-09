var calculator = require('./calculator');

var calculatorHandler = {

   calculate : function(reqData,res){
    var op = reqData.op,
      n1 = parseInt(reqData.n1, 10),
      n2 = parseInt(reqData.n2, 10);
    var result = calculator.callFunction(op,n1, n2);
    res.write(result.toString());
    return res;
  }

};

module.exports = calculatorHandler;
