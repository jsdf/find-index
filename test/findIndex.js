var tap = require('tap');
var findIndex = require('../findIndex');

tap.test('findIndex', function (t) {
  var repeats = 3;
  var testNumValues = 1000;
  var testFindValue = 345;
  var testArray = [];

  for (var k = 0; k < repeats; k++) {
    for (var i = 0; i < testNumValues; i++) {
      testArray.push({id: i});
    }
  }

  var testContext = {id: testFindValue};

  function testPredicate(item) {
    return item.id === testFindValue;
  }

  function testPredicateWithContext(item) {
    return item.id === this.id;
  }

  var result1 = findIndex(testArray, testPredicate);
  t.equal(result1, testFindValue);

  var result2 = findIndex(testArray, testPredicateWithContext, testContext);
  t.equal(result2, testFindValue);
  t.end();
});
