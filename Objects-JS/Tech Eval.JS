// ================================================================================
// You will be writing a series of functions beneath each block of comments below.
// Tackle each function one at a time. You may move on to a new exercise and return
// later. Run the code and the console to the right will tell you if your function 
// is successfully passing the tests.
// ================================================================================


/*
  Define a function named `kmToMiles` that receives one parameter:
    1) km - type: number
  The function should return a number in miles, rounded down to nearest integer. 
  
  HINT: There are 1.6km in 1 mile.
  HINT: What method on Javascript's Math object can round decimals down to nearest whole number?
*/

/*
  Define a function named `countLetters` that receives two parameters:
    1) sentence  - type: string
    2) character - type: string
  The function should return a count of every `character` present in `sentence`.

  HINT: You can access a single character in a string just like accessing an element in an array - `myString[3]` would access the third character
*/

/*
  Define a function named `middleElement` that receives one parameter:
    1) items - type: array
  The function should return the element present in the middle index. If
  the array contains an even number of elements, return the item in the 
  first half of the array closest to the middle.
  
  HINT: You can use the expression `n % 2 === 0` to check if `n` is an even number
*/

/*
  Define a function named `rightToVote` that receives one parameter:
    1) person - type: object
  The function should check the `age` property on `person`. If it is 18 or older, 
  return true. Otherwise, return false. If `age` property does not exist, throw an error.
  
  HINT: A property that doesn't exist is *not* the same as having an undefined value
  HINT: The hasOwnProperty() method or the `in` operator could be used here
*/

/*
  Define a factory function `createStudent` that receives two parameters:
    1) name - type: string
    2) location - type: string
  If the function does not receive both parameters, throw an Error. This factory should 
  return an object that includes the provided `name` and `location` properties and also 
  has a `describe` method that returns the string: "Hello, I am {name} and I live in 
  {location}."

  HINT: You will want to use the `this` keyword
*/




/*
  ===========================================
  IGNORE ALL CODE BELOW HERE
  ===========================================
|
|
|
|
|
|
|
|
*/
/* eslint-disable no-console */
(function(){
  function fnExists(fnName) {
    return window[fnName] !== undefined;
  }

  function testKmToMiles() {
    const FN_NAME = 'kmToMiles';
    if (!fnExists(FN_NAME)) 
      return console.log(`\`${FN_NAME}\` - FAIL: function is not defined`);
    
    const results = [];
    const testArgs = [50, 79];
    const expected = [31, 49];

    try {
      testArgs.forEach(ta => results.push(window[FN_NAME](ta)));
    } catch(e) {
      return console.log(`\`${FN_NAME}\` - FAIL: function produced unexpected error: ${e.message}`);
    }

    for (let i = 0; i < results.length; i++) {
      if (results[i] !== expected[i]) {
        return console.log(`\`${FN_NAME}(${testArgs[i]})\` - FAIL: expected ${expected[i]}, got ${results[i]}`);
      }
    }

    console.log(`\`${FN_NAME}\` - SUCCESS: All tests passed`);
  }

  function testCountLetters() {
    const FN_NAME = 'countLetters';
    if (!fnExists(FN_NAME)) 
      return console.log(`\`${FN_NAME}\` - FAIL: function is not defined`);

    const results = [];
    const testArgs = [
      ['fly me to the moon', 'o'],
      ['do or do not. there is no try', 'e']
    ];
    const expected = [3, 2];

    try {
      testArgs.forEach(ta => results.push(window[FN_NAME](...ta)));
    } catch(e) {
      return console.log(`\`${FN_NAME}\` - FAIL: function produced unexpected error: ${e.message}`);
    }

    for (let i = 0; i < results.length; i++) {
      if (results[i] !== expected[i]) {
        return console.log(`\`${FN_NAME}(${testArgs[i].map(e => `'${e}'`).join(', ')})\` - FAIL: expected ${expected[i]}, got ${results[i]}`);
      }
    }

    console.log(`\`${FN_NAME}\` - SUCCESS: All tests passed`);
  }

  function testMiddleElement() {
    const FN_NAME = 'middleElement';
    if (!fnExists(FN_NAME)) 
      return console.log(`\`${FN_NAME}\` - FAIL: function is not defined`);

    const results = [];
    const testArgs = [
      [2,5,7,10,34],
      [2,5,10,34]      
    ];
    const expected = [7, 5];

    try {
      testArgs.forEach(ta => results.push(window[FN_NAME](ta)));
    } catch(e) {
      return console.log(`\`${FN_NAME}\` - FAIL: function produced unexpected error: ${e.message}`);
    }

    for (let i = 0; i < results.length; i++) {
      if (results[i] !== expected[i]) {
        return console.log(`\`${FN_NAME}([${testArgs[i]}])\` - FAIL: expected ${expected[i]}, got ${results[i]}`);
      }
    }

    console.log(`\`${FN_NAME}\` - SUCCESS: All tests passed`);
  }

  function testRightToVote() {
    const FN_NAME = 'rightToVote';
    const fn = window[FN_NAME];
    if (!fnExists(FN_NAME)) 
      return console.log(`\`${FN_NAME}\` - FAIL: function is not defined`);

    const results = [];
    const testArgs = [
      { name: 'rich', age: 25 },
      { name: 'rich', age: 15 },
      { name: 'john', age: 18 }
    ];
    const expected = [true, false, true];

    try {
      testArgs.forEach(ta => results.push(window[FN_NAME](ta)));
    } catch(e) {
      return console.log(`\`${FN_NAME}\` - FAIL: function produced unexpected error: ${e.message}`);
    }

    for (let i = 0; i < results.length; i++) {
      if (results[i] !== expected[i]) {
        return console.log(`\`${FN_NAME}(${JSON.stringify(testArgs[i])})\` - FAIL: expected ${expected[i]}, got ${results[i]}`);
      }
    }

    // Custom tests
    let result1, result2;
    try {
      result1 = fn({ name: 'rich', age: undefined });
      if (result1 !== false) {
        return console.log(`\`${FN_NAME}\` - FAIL: expected false, got ${result1}`);
      }
    } catch(e) {
      return console.log(`\`${FN_NAME}\` - FAIL: function produced unexpected error: ${e.message}`);
    }

    try {
      result2 = fn({ name: 'rich' });
      return console.log(`\`${FN_NAME}\` - FAIL: function should throw Error with no 'age' prop, instead returned ${result2}`);
    } catch(e) {
      // Successful test if error thrown... caveat: not testing for specific error 
    }

    console.log(`\`${FN_NAME}\` - SUCCESS: All tests passed`);
  }

  function testCreateStudent() {
    const FN_NAME = 'createStudent';
    const fn = window[FN_NAME];
    if (!fnExists(FN_NAME)) 
      return console.log(`\`${FN_NAME}\` - FAIL: function is not defined`);

    let result1;
    try {
      result1 = fn('Rich', 'Los Angeles');
    } catch(e) {
      return console.log(`\`${FN_NAME}\` - FAIL: function produced unexpected error: ${e.message}`);
    }

    let failMsg = (msg) => `\`${FN_NAME}('Rich', 'Los Angeles')\` - FAIL: ${msg}`;

    if (typeof result1 !== 'object') 
      return console.log(failMsg('did not return an object')); 
    if (result1.name !== 'Rich') 
      return console.log(failMsg(`expected prop 'name' to be 'Rich', instead got '${result1.name}'`));
    if (result1.location !== 'Los Angeles') 
      return console.log(failMsg(`expected prop 'location' to be 'Los Angeles', instead got '${result1.location}'`));
    if (typeof result1.describe !== 'function')
      return console.log(failMsg('expected prop \'describe\' to be a function'));
    if (result1.describe() !== 'Hello, I am Rich and I live in Los Angeles.')
      return console.log(failMsg('\'describe\' method did not return correct message'));

    result1.name = 'Joe';
    if (result1.describe() !== 'Hello, I am Joe and I live in Los Angeles.')
      return console.log(failMsg('\'describe\' method did not return correct message. Are you using `this` correctly?'));
    
    failMsg = (msg) => `\`${FN_NAME}('Joe')\` - FAIL: ${msg}`;

    let result2;
    try {
      result2 = fn('Joe');
      return console.log(failMsg(`missing second parameter should throw error, instead returned ${result2}`));
    } catch(e) {
      // Test success
    }

    console.log(`\`${FN_NAME}\` - SUCCESS: All tests passed`);
  }


  testKmToMiles();
  testCountLetters();
  testMiddleElement();
  testRightToVote();
  testCreateStudent();
}());
