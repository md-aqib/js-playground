const nestedArray = [1, [2, 3, [44, 5]], 6, [7, 8]];

//Accessing Elements
console.log(nestedArray[1][2][0]); // Outputs 44

//Flattening the Array
const flattened = nestedArray.flat(Infinity);
console.log(flattened); // Outputs: [1, 2, 3, 44, 5, 6, 7, 8]

//Flattening the Array without Predefined methods
const array = [1,2,3,4,[5,6,7],8,[9,10,[11,12,[13]]]]
function foo(arr) {
    let fArr = []
    for(let ele of arr) {
        if(Array.isArray(ele)) {
            let newArr = foo(ele)
            fArr.push(...newArr)
        } else {
            fArr.push(ele)
        }
    }
    return fArr;
}
console.log(foo(array))



