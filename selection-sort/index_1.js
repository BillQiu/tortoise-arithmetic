/**
 * 1. find min in arr
 * 2. exchange
 * @param {array} arr
 */
module.exports = function SelectionSort(arr) {
    const length = arr.length;
    let min;

    for (let i = 0; i < arr.length; i++) {
        min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            const tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }

    return arr;
}


