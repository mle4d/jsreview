const createDog = require('./index');
describe('create dog function', () => {
  //individual tests
  it('returns a dog object', () => {
    const dog = createDog('clifford', 80, '800lbs');
    expect(dog).toEqual({
      name: 'clifford',
      age: 80,
      weight: '800lbs'

    });
  });

});
