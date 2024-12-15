// console.log("Start");
// setImmediate(() => {
//     console.log("Immediate");
// });
// setTimeout(() => {
//     console.log("Timeout");
// }, 0);
// console.log("End");



console.log("Start");
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
console.log("End");
