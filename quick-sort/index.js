/**
 * 原地排序
 * 不稳定
 * nlog(n)
 * @param {Array} arr
 */
module.exports = function QuickSort(arr) {
    partition(arr, 0, arr[arr.length - 1]);

}

/**
 * 分区函数
 * 不考虑空间复杂度
 * @param {Array} A
 * @param {Number} p 起始位置
 * @param {Number} r 结束位置
 */
function partition(A, p, r) {
    if (p >= r) return;

    const pivot = A[r];
    let left = [];
    let right = [];

    // 边界条件：注意 pivot
    for (let index = 0; index < A.length - 1; index++) {
        const item = A[index];
        if (item >= pivot) {
            right.push(item)
        } else {
            left.push(item)
        }
    }

    left = partition(left, 0, left.length)
    right = partition(right, 0, right.length)

    return [...left, pivot, ...right]
}