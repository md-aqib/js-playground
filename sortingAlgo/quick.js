//Quick Sort picks a pivot and partitions the array around the pivot.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let array = [10, 7, 8, 9, 1, 5];
console.log(quickSort(array));
