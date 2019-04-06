/**
 * 原地排序
 * 不稳定
 * nlog(n)
 * @param {Array} arr
 */
function quickSort_v0(arr) {
    return partition_v0(arr, 0, arr.length - 1);
}

/**
 * 分区函数
 * 不考虑空间复杂度
 * @param {Array} A
 * @param {Number} p 起始位置
 * @param {Number} r 结束位置
 */
function partition_v0(A, p, r) {
    if (A.length <= 1) return A;

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

    left = partition_v0(left, 0, left.length - 1)
    right = partition_v0(right, 0, right.length - 1)

    return [...left, pivot, ...right]
}

const quickSort_v1 = (arr, left, right) => {
    if (left < right) {
        let partitionIndex = partition_v1(arr, left, right)
        quickSort_v1(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
        quickSort_v1(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right);
    }
}

function swap(A, i, j) {
    const tmp = A[i];

    A[i] = A[j];
    A[j] = tmp;
}

function partition_v1(A, p, r) {
    if (A.length <= 1) return;

    const pivot = A[r];
    let i = p;

    for (let j = p; j < r; j++) {
        if (A[j] < pivot) {
            swap(A, i, j);
            i++;
        }
    }
    swap(A, r, i);

    return i;
}


module.exports = {
    quickSort_v0,
    quickSort_v1
}