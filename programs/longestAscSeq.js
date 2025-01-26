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
  
  





