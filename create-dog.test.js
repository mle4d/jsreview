const createDog = require('./create-dog');

describe('create dog function', () => {
  it('returns a doggo', () => {
    const dog = createDog('clifford', 80, '800lbs');
    expect(dog).toEqual({
      name: 'clifford',
      age: 80,
      weight: '800lbs'
    });
  });
});
