let myName = 'bobfsdfs';

let myPromise = new Promise(function(resolve, reject) {

  // a code that takes a long time to run...
  // fetching some data from a database

  if (myName == 'bob')
    resolve(32324);
  reject(231231);
});

myPromise.then(promiseSuccess).catch(promiseError);
console.log("this is after the promise");

function promiseSuccess(result){
  console.log("this is a success", result);
}
 
function promiseError(result) {
  console.log("this was an error", result);
}