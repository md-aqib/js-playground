//Bubble Sort compares adjacent elements and swaps them if they are in the wrong order.
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            };
        };
    };
    return arr;
};

let array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));