const test = require('tape');
const ndarray = require('ndarray');
const entropy = require('../index');

const ndarray1 = ndarray([1, 2, 3, 4]);

test('Basic tests', (t) => {
  t.equal(typeof entropy(ndarray1), 'number', 'entropy should return a number');
  t.equal(entropy(ndarray1), 2, 'entropy of [1, 2, 3, 4] should equal 2');
  t.end();
});
