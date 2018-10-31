const assert = {
  equal: function(firstValue, secondValue) {
    if (firstValue != secondValue) 
      throw new Error('Assert failed, ' + firstValue + ' is not equal to ' + secondValue + '.');
  }
};

function addTwoNumbers(x, y) {
  return x + y;
}

function testAddTwoNumbers() {

  // 1. ARRANGE
  const x = 5;
  const y = 1;
  const sum1 = x + y;

  // 2. ACT
  const sum2 = addTwoNumbers(x, y);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  

  // 3. ASSERT
  try {

    assert.equal(sum1, sum2);
    
    console.log('Passed.');
  } catch (error) {
    console.log(error.message);
  }
  
}

testAddTwoNumbers();
