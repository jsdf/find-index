var tap = require('tap');
var index = require('../index');

tap.test('index', function (t) {
  var testNumValues = 1000;
  var testFindValue = 345;
  var testArray = [];
  for (var i = 0; i < testNumValues; i++) {
    testArray[i] = {id: i};
  }

  var result = index(testArray, function(item) {
    return item.id === testFindValue;
  });

  t.equal(result, testFindValue);
  t.end();
});
