const nestedArray = [1, [2, 3, [44, 5]], 6, [7, 8]];

//Accessing Elements
console.log(nestedArray[1][2][0]); // Outputs 44

//Flattening the Array
const flattened = nestedArray.flat(Infinity);
console.log(flattened); // Outputs: [1, 2, 3, 44, 5, 6, 7, 8]

//max number
// const maxValue = Math.max(...nestedArray.flat(Infinity));
// console.log(maxValue); // Outputs: 44

function findMaxWithLoop(array) {
  let max = -Infinity;
  const stack = [...array]; // Start with a copy of the array as the stack

  while (stack.length > 0) {
    const element = stack.pop(); // Get the last element
    if (Array.isArray(element)) {
      stack.push(...element); // If it's an array, push its elements to the stack
    } else {
      max = Math.max(max, element); // If it's a number, update max
    }
  }

  return max;
}

const maxValue = findMaxWithLoop(nestedArray);
console.log(maxValue); // Outputs: 44



