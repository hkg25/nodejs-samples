
module.exports = function(){
var result = 0;
return{
  add : function(n){
     result+=n;
  },
  substract : function(n){
    result-=n;
  },
  multiply: function(n){
      result*=n;
  },
  divide : function(n){
      result/=n;
  },
  getResult : function(n){
    return result;
  }
}
}
//console.log('@Accumulator.js --> ', acc);
//module.exports= acc;
