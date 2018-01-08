//Area of a rectangle
function computeArea(width,height)
{
	return width * height;
}


function testComputeArea() {
  let width = 3;
  let height = 4;
  let expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  } else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();

//Temperture conversion below
function celsToFahr(celsTemp) {
  let f = (celsTemp*1.8)+32;
  return f;
  }

function fahrToCels(fahrTemp) {
  let c = (fahrTemp-32)/1.8;
  return c;
}

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  } else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  let cel2FahrInput = 100;
  let cel2FahrExpect = 212;
  let fahr2CelInput = 32;
  let fahr2CelExpect = 0;

  if (
    testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
    testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)
  ) {
    console.log('SUCCESS: All tests passing');
  } else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();

//Divisable calculator
function isDivisible(divisee, divisor) {
  if((divisee%divisor) === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}



function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  } else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();
