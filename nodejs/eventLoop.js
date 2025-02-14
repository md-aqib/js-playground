// console.log("Start");
// setImmediate(() => {
//     console.log("Immediate");
// });
// setTimeout(() => {
//     console.log("Timeout");
// }, 0);
// console.log("End");



const fs = require('fs');

setImmediate(() => {
    console.log("Immediate");
});

setTimeout(() => {
    console.log("Timeout");
}, 1000);

Promise.resolve().then(() => {
    console.log("Promise");
});

process.nextTick(() => {
    console.log("Next Tick");
});

// Synchronous file read
const data = fs.readFileSync(__filename, 'utf-8');
console.log("Read File Sync Completed");

// Asynchronous file read
fs.readFile(__filename, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("Read File Async Completed");
});

// Asynchronous file write
fs.writeFile('test.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log("Write File Async Completed");
});

// Synchronous file write
fs.writeFileSync('test_sync.txt', 'Hello, Sync!');
console.log("Write File Sync Completed");

console.log("End");

/* OUTPUT SEQ
End
Read File Sync Completed
Write File Sync Completed
Next Tick
Promise
Read File Async Completed
Write File Async Completed
Immediate
Timeout

NOTE:
1.Inside an I/O callback, setImmediate() executes before setTimeout()
2.Normal Execution(setImmediate(), setTimeout()), Unpredictable (depends on the event loop)
*/
