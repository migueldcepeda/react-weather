//callback pattern
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//Problems -
//1. one callback function responsible for differentiating between error and success cases
//2. callback function called twice; realistically shouldn't happen, something shouldn't both succeed and fail

//OUTPUT:
//success 78
//error City not found


//promise pattern
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject){
//     setTimout(function () {  //simulates delay of real promise
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

//OUTPUT:
//promise success 79

//promises allow you to write better code, easier to maintain




// Challenge
function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a & b need to be numbers');
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise('pizza', 9).then(function (sum) {
  console.log('this should not show up');
}, function (err) {
  console.log('this should appear:', err);
});
