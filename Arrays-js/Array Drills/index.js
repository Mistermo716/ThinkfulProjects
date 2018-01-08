//Array Copying I
function firstFourItems(array) {
  return array.slice(0, 4);
}

function lastThreeItems(array) {
  return array.slice(-3);
}

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function runTests() {
  const list = ['red bull', 'monster', 'amp', 'rockstar', 'full throttle'];
  const result1 = ['red bull', 'monster', 'amp', 'rockstar'];
  const result2 = ['amp', 'rockstar', 'full throttle'];

  const testResults = [
    testFunctionWorks(firstFourItems, list, result1),
    testFunctionWorks(lastThreeItems, list, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//Array Copying II
function minusLastItem(array) {
  return array.slice(0, array.length - 1);
}

function copyFirstHalf(array) {
  return array.slice(0, array.length / 2);
}

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function runTests() {
  const list = [
    'red bull',
    'monster',
    'amp',
    'rockstar',
    'full throttle',
    'kickstart',
  ];
  const result1 = ['red bull', 'monster', 'amp', 'rockstar', 'full throttle'];
  const result2 = ['red bull', 'monster', 'amp'];

  const testResults = [
    testFunctionWorks(minusLastItem, list, result1),
    testFunctionWorks(copyFirstHalf, list, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//Map Squares

function squares(array) {
  return array.map(num => num ** 2);
}



function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const input1 = [1, 2, 3, 4, 5];
  const result1 = [1, 4, 9, 16, 25];
  const input2 = [2, 4, 6, 8];
  const result2 = [4, 16, 36, 64];

  const testResults = [
    testFunctionWorks(squares, input1, result1),
    testFunctionWorks(squares, input2, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//Sort
 

function greatestToLeast(array) {
  return array.sort(function(a, b) {
    return b - a;
  });
}


function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item, index) {
      return index === 0 || result[index] < result[index - 1];
    }) &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const input1 = [10, 3, 5, 22, 19];
  const result1 = [22, 19, 10, 5, 3];
  const input2 = [2, 4, 6, 8];
  const result2 = [8, 6, 4, 2];

  const testResults = [
    testFunctionWorks(greatestToLeast, input1, result1),
    testFunctionWorks(greatestToLeast, input2, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//Filter
//
function shortWords(array) {
  return array.filter(function(word) {
    return word.length < 5;
  });
}

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue', 'house'];
  const result1 = ['cat', 'dog', 'blue'];
  const input2 = ['rainbow', 'the', 'big', 'broom'];
  const result2 = ['the', 'big'];

  const testResults = [
    testFunctionWorks(shortWords, input1, result1),
    testFunctionWorks(shortWords, input2, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//Find

function divisibleBy5(array) {
  return array.find(function(num) {
    return num % 5 === 0;
  });
}

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  var input1 = [13, 22, 4, 47, 15, 35, 82];
  var result1 = 15;
  var input2 = [25, 20, 15, 10, 5];
  var result2 = 25;

  var testResults = [
    testFunctionWorks(divisibleBy5, input1, result1),
    testFunctionWorks(divisibleBy5, input2, result2),
  ];

  var numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();


