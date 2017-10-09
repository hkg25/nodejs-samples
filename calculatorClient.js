var n1=200,n2=20;

var calculator = require('./calculator').cal;

console.log('@calcualtorClient.js -->', calculator);

console.log(calculator.add(n1,n2))
console.log(calculator.subtract(n1,n2))
console.log(calculator.multiply(n1,n2))
console.log(calculator.divide(n1,n2))
