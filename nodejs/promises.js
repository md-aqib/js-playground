// const promise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Operation successful!");
//     } else {
//         reject("Operation failed.");
//     }
// });

// promise
//     .then((message) => console.log(message))  // Runs on success
//     .catch((error) => console.log(error));    // Runs on failure

Promise.all([Promise.resolve(1), Promise.resolve(2)])
    .then(console.log) // [1, 2]
    .catch(console.error);


Promise.allSettled([Promise.resolve(1), Promise.reject('Error')])
  .then(console.log);
// [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'Error' }]


Promise.race([
    new Promise((res) => setTimeout(() => res('First'), 100)),
    new Promise((_, rej) => setTimeout(() => rej('Error'), 50))
]).then(console.log).catch(console.error); // "Error"


Promise.any([
    Promise.reject('Error 1'),
    Promise.resolve('Success'),
    Promise.reject('Error 2')
]).then(console.log).catch(console.error); // "Success"
  
  
