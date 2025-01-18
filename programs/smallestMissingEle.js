function solution(A) {
    let filtered = A.filter(e => e > 0).sort((a, b) => a - b);

    let smallest = 1;
    for (let num of filtered) {
        if (num === smallest) {
            smallest++;
        } else if (num > smallest) {
            break;
        }
    }

    return smallest;
}

// Example Test Cases
console.log(solution([1, 2, 3]));          // Output: 4
console.log(solution([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(solution([-1, -3]));           // Output: 1
