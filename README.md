# callback-promises

Module to execute callback promises in a sequence.

Installing
--------

```
git clone https://github.com/brunohl91/callback-promise.git
```

Example usage
--------

Example usage can be found on test.js

```
var cal = require('./callback-promise.js');

cal.debug = true;

// Define callback to all promises executed
cal.setComplete(function (res) {
  console.log(res);
});

// Set values for each job
cal.setJobs(
  [ 10000, 2000, 300 ]
);

// Start iteration
cal.begin(function ( time ) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time)
  })
})

```