//wisePerson below
function wisePerson(wiseType, whatToSay) 
{
  return `A wise ${wiseType} once said: "${whatToSay}".`;

}



function testWisePerson() {
  var goat = "goat";
  var saying = "Hello world"
  console.log(wisePerson(goat,saying));
}

testWisePerson();

//below is the shouter portion of the project.
function shouter (whatToShout)
{
  return `${whatToShout.toUpperCase()}!!!`;
}
function testShouter() {
  const whatToShout = 'fee figh foe fum';
  const expected = 'FEE FIGH FOE FUM!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  } else {
    console.log('FAILURE: `shouter` is not working');
  }
}

testShouter();
//text normalizer below
function textNormalizer(text) {
  return text.toLowerCase().trim();
}


function testTextNormalizer() {
  const text = "   let's GO SURFING NOW everyone is learning how   ";
  const expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  } else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

testTextNormalizer();