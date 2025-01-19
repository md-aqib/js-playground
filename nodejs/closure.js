/** Intemediate Problem 1 **/
function createCounters() {
    let counters = [];
    for (let i = 0; i < 3; i++) {
        counters[i] = function () {
            return i;
        };
    }
    return counters;
}

const counters = createCounters();
console.log(counters[0]()); // 0
console.log(counters[1]()); // 1
console.log(counters[2]()); // 2

/** Intemediate Problem 2 **/
function Counter() {
    this.count = 0;

    return function () {
        this.count++;
        console.log(this.count);
    };
}
//solution 1
// const counter = new Counter();
// counter(); // NaN this keyword pointing global object and undefined in strict mode
// function Counter() {
//     this.count = 0;

//     return (function () {
//         this.count++;
//         console.log(this.count);
//     }).bind(this); // Bind the returned function to the instance of Counter
// }
// const counter = new Counter();
// counter(); // Logs: 1
// counter(); // Logs: 2

//solution 2
// function Counter() {
//     this.count = 0;

//     return () => {
//         this.count++;
//         console.log(this.count);
//     };
// }
// const counter = new Counter();
// counter(); // Logs: 1
// counter(); // Logs: 2


