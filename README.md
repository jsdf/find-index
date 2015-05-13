
# find-index

**ES6 `Array#findIndex` ponyfill**

**Ponyfill: A polyfill that doesn't overwrite the native method.**

Finds an item in an array matching a predicate function, and returns its index.

Fast both when `thisArg` is used and also when it isn't: 
[jsPerf](http://jsperf.com/array-prototype-findindex-shims)

### usage

```bash
npm install find-index
```

```js
var findIndex = require('find-index')  // will use native Array#findIndex if available.
var findIndex = require('find-index/findIndex')  // won't defer to native implementation
var findLastIndex = require('find-index/last') // search backwards from end
```
    findIndex(array, callback[, thisArg])
    findLastIndex(array, callback[, thisArg])
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

Based on [array-findindex](https://www.npmjs.org/package/array-findindex)
