function addTwoNumbers(x, y) {
  return x + y;
}

function testAddTwoNumbers() {

  // 1. ARRANGE
  var x = 5;
  var y = 1;
  var sum1 = x + y;

  // 2. ACT
  var sum2 = addTwoNumbers(x, y);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  

  // 3. ASSERT
  if ( sum1 === sum2 ) 
    return console.log('Passed.');
  
  console.log('Failed.');
}

testAddTwoNumbers();