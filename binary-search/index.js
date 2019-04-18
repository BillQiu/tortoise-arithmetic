/**
 *
 * 在给定的有序数组中，找到给定值。
 * O(logn)
 */

/**
 *
 * 使用循环的方式实现。
 *
 * @param {array} arr 有序数组
 */
function cyclicBinarySearch(arr, target) {
    if (arr.length <= 1) return arr;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const middle = Math.floor(start, end);

        if (target === arr[middle]) {
            return middle;
        } else if (target > arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}

module.exports = {
    cyclicBinarySearch
};
