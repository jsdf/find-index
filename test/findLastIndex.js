var tap = require('tap');
var findLastIndex = require('../findLastIndex');

tap.test('findLastIndex', function (t) {
  var repeats = 3;
  var testNumValues = 1000;
  var testFindValue = 345;
  var testFindValueLast = (repeats - 1) * testNumValues + testFindValue;
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

  var result1 = findLastIndex(testArray, testPredicate);
  t.equal(result1, testFindValueLast);

  var result2 = findLastIndex(testArray, testPredicateWithContext, testContext);
  t.equal(result2, testFindValueLast);
  t.end();
});
