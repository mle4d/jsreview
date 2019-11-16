const { getState, updateState } = require('./store');

describe('store', () => {

  it('get state', () => {
    const state = getState(); 
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
  it('update state', () => {
    updateState('shirts', 104);
    const state = getState();
    expect(state).toEqual;


  });
});

