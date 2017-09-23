
/*
  Teste de promises
 */

var cal = require('./callback-promises.js');

cal.debug = true;

cal.setComplete(function (res) {
  console.log(res);
});

cal.setJobs(
  [ 10000, 2000, 300 ]
);

cal.begin(function ( time ) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time)
  })
})
