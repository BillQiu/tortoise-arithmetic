 function SelectionSort_V0(arr) {
    for (let index = 0; index < arr.length; index++) {
        const min = Math.min(...arr.slice(index));
        const minIndex = arr.indexOf(min);

        arr[minIndex] = arr[index];
        arr[index] = min;
    }

    return arr;
 }
