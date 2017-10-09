var accFactory = require('./accumulator');

var acc = accFactory();
console.log('@accClient.js -->', acc);

acc.add(100);
acc.substract(50);
acc.multiply(10);
acc.divide(2);

console.log(acc.getResult());

var acc2 = accFactory();

//console.log('@accClient.js -->', acc2);

acc2.add(1000);
acc2.substract(50);
acc2.multiply(100);
acc2.divide(2);

console.log(acc2.getResult());
