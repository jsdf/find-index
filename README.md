
# find-indexof

finds an item in an array matching a predicate function,
and returns its index

fast both when `thisArg` is used and also when it isn't: [jsPerf](http://jsperf.com/array-prototype-findindex-shims)

### usage
```bash
npm install find-indexof
```
```js
findIndexOf = require('find-indexof')
findLastIndexOf = require('find-indexof/last')
```
    findIndexOf(array, callback[, thisArg])
    findLastIndexOf(array, callback[, thisArg])
    Parameters:
      array
        The array to operate on.
      callback
        Function to execute on each value in the array, taking three arguments:
          element
            The current element being processed in the array.
          index
            The index of the current element being processed in the array.
          array
            The array findIndex was called upon.
      thisArg
        Object to use as this when executing callback.

based on [array-findindex](https://www.npmjs.org/package/array-findindex)