//Selection Sort repeatedly finds the minimum element and moves it to the sorted part of the array.
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
    }
    return arr;
}

let array = [29, 10, 14, 37, 13];
console.log(selectionSort(array));


