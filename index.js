const createDog = require('./create-dog');

console.log(process.argv[2]);
const name = process.argv[2];
const age = process.argv[3];
const weight = process.argv[4];
const dog = createDog(name, age, weight);

console.log(dog);
