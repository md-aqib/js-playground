function foo(arr) {
    if(!arr.length) return 0;
    let max = 1;
    let curr = 1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
            curr++
            if(curr > max) {
                max = curr;
            }
        } else {
            curr = 1
        }
    }
    return max;
}

console.log(foo([1, 2, 3, 14, 4, 5, 6, 7, 12, 9]))

function findLongestConsecutiveSubsequence(arr) {
    // Convert the array to a set for O(1) lookups
    const set = new Set(arr);
    let maxLength = 0;
  
    // Iterate through the array
    for (let num of arr) {
      // Check if this is the start of a sequence
      if (!set.has(num - 1)) {
        let currentNum = num;
        let currentLength = 1;
  
        // Count the length of the sequence
        while (set.has(currentNum + 1)) {
          currentNum += 1;
          currentLength += 1;
        }
  
        // Update the maximum length
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  
    return maxLength;
  }
  
  // Example
  const arr = [2, 6, 1, 9, 4, 5, 3];
  console.log(findLongestConsecutiveSubsequence(arr)); // Output: 6
  
  
  





