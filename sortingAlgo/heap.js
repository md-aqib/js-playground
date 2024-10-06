//Heap Sort first creates a max heap and then repeatedly extracts the maximum element to sort the array.
function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap elements
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
        heapify(arr, n, largest);
    }
}

let array = [12, 11, 13, 5, 6, 7];
console.log(heapSort(array));
