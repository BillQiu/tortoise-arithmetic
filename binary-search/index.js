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
 * @param {number} target 目标值
 */
function cyclicBinarySearch(arr, target) {
    if (arr.length <= 1) return arr;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);

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

/**
 * 使用递归的方式实现。
 *
 * @param {*} arr
 * @param {*} target
 */
function recursionBinarySearch(arr, target) {
    if (arr.length === 0) return -1;

    let start = 0;
    let end = arr.length - 1;
    // const middle = Math.floor((start + end) / 2);
    const middle = start + ((end - start) >> 1); // 位运算，提升性能；防止数值太大溢出。

    if (target === arr[middle]) {
        return middle;
    } else if (target > arr[middle]) {
        return recursionBinarySearch(arr.splice(middle));
    } else {
        return recursionBinarySearch(arr.splice(0, middle - 1));
    }
}

module.exports = {
    cyclicBinarySearch,
    recursionBinarySearch
};
