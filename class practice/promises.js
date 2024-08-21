

console.log('start')

setTimeout(
    ()=>{console.log("1")

    }, 0
);

setTimeout(
    ()=>{console.log("2")

    }, 2000
);

console.log("end");
////
const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
      resolve("Promise is fulfilled!");
    } else {
      reject("Promise failed!");
    }
  });
  
  function handleResolve(value) {
    console.log(value);
  }
  
  function handleReject(reason) {
    console.error(reason);
  }
  
  promise.then(handleResolve, handleReject);
  console.log("-------------example 2 promise chaining-------")

  var add = function(x, y) {
    return new Promise((resolve,reject) => {
      var sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not add the two values!"));
      }
    });
  };
  
  var subtract = function(x, y) {
    return new Promise((resolve, reject) => {
      var sum = x - y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not subtract the two values!"));
      }
    });
  };
  
  // Starting promise chain
  add(2,2)
    .then((added) => {
      // added = 4
      return subtract(added, 3);
    })
    .then((subtracted) => {
      // subtracted = 1
      return add(subtracted, 5);
    })
    .then((added) => {
      // added = 6
      return added * 2;    
    })
    .then((result) => {
      // result = 12
      console.log("My result is ", result);
    })
    .catch((err) => {
      // If any part of the chain is rejected, print the error message.
      console.log(err);
    });