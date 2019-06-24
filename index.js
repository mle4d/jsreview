function createDog(name, age, weight) {
  return {
    name, 
    age,
    weight
  };
}

const dog = createDog('clifford', 80, '800lbs');

console.log(dog);

//arrow function version

//const createDog = (name, age, weight) => ({
//     name, 
//     age,
//     weight
//   });
