// function findAllOccurrences(inputString, searchString) {
//     const result = [];
//     let index = inputString.indexOf(searchString);
  
//     // Loop to find all occurrences
//     while (index !== -1) {
//       result.push(index);
//       index = inputString.indexOf(searchString, index + 1); // Search from the next position
//     }
  
//     return result;
// }

function findAllOccurrences(inputString, searchString) {
  const result = [];
  let arrOfStr = inputString.split(" ");
  let currIndex = 0;
  for(let ele of arrOfStr) {
    if(ele === searchString) {
      result.push(currIndex);
      currIndex += ele.length + 1;
    } else {
      currIndex += ele.length + 1;
    }
  }

  return result;
}

const inputString = "hello hello world hello";
const searchString = "hello";
console.log(findAllOccurrences(inputString, searchString)); // Output: [0, 6, 18]
  
  