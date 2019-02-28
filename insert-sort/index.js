/**
 * 对边界条件的处理
 * @param array
 * @param n
 */
module.exports = function InsertSort(array) {
    const n = array.length;
    if (n < 1) return;

    for(let i = 1; i < n; i++ ) {
        let value = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > value) {
            array[j + 1] = array[j]
            j--;
        }
        array[j + 1] = value;
    }
    return array;
}