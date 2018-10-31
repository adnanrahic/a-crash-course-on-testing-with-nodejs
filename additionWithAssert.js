const assert = require('assert');

function addTwoNumbers(x, y) {
  return x + y;
}

function testAddTwoNumbers() {
  const x = 5;
  const y = 1;
  const sum1 = x + y;
  const sum2 = addTwoNumbers(x, y);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  
  try {

    assert.equal(sum1, sum2);
    
    console.log('Passed.');
  } catch (error) {
    console.error('Failed.');
  }
}

testAddTwoNumbers();

