const sum = require('./sum');

// verifica se a função sum é uma função
console.assert(
  typeof sum === 'function',
  'sum deve ser uma função'
);

console.assert(
  typeof sum === 'function',
  'sum deve ser uma função'
);

console.assert(
  sum(1, 2) === 3, 
  'should sum(1,2) return 3'
);

console.assert(
  sum(2, 3) === 5,
  'should sum(2,3) return 5'
);

console.log('All tests passed');