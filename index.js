function createDog(name, age, weight) {
  return {
    name, 
    age,
    weight
  };
}

const dog = createDog('clifford', 80, '800lbs');

console.log(dog);
