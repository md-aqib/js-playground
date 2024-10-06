/*
TimSort is a hybrid sorting algorithm derived from merge sort and insertion sort.
It is the default sorting algorithm in Python and JavaScript's Array.prototype.sort()
for most modern engines like V8 (used in Node.js and Chrome).
How TimSort Works:
-> It splits the array into small chunks called runs.
-> Each run is sorted individually using insertion sort (as insertion sort is efficient for small datasets).
-> Afterward, the runs are merged together using a process similar to merge sort.
*/

let array = [5, 3, 8, 6, 2, 7, 4, 1];
array.sort((a, b) => a - b);  // Ascending order
array.sort((a, b) => b - a);  // Descending order
console.log(array);
