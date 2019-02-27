/**
 * 1. find min in arr
 * 2. exchange
 * @param {array} arr 
 */
function SelectionSort(arr) {
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

/**
 * what's this ?

 function SelectionSort_V0(arr) {
 
     for (let index = 0; index < arr.length; index++) {
         const min = Math.min(...arr.slice(index));
         const minIndex = arr.indexOf(min);
 
         arr[minIndex] = arr[index];
         arr[index] = min;
     }
     return arr;
 }

 */
