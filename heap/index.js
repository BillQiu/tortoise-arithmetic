/**
 * 以大顶堆为例
 * 1. 插入
 * 2. 删除
 *
 * @param {arr} array
 */
class Heap {
    constructor(arr = []) {
        this.a = [,]; // 从 1 开始计数
        this.count = 0; // 存储数量
        this.heapify(arr); // 堆化
    }

    get heap() {
        return this.a.slice(1);
    }

    swap = (a, b, heap) => {
        const tmp = heap[a];
        heap[a] = heap[b];
        heap[b] = tmp;

        return heap;
    };

    leftChild = i => {
        if (this.a[i * 2]) {
            return a[i * 2];
        }
    };

    rightChild = i => {
        if (this.a[i * 2 + 1]) {
            return a[i * 2 + 1];
        }
    };

    heapify = arr => {
        if (!arr.length) return;
    };

    insert = data => {
        ++this.count;
        this.a[this.count] = data;

        let i = this.count;
        while (i / 2 > 0 && this.a[i] > this.a[i / 2]) {
            this.swap(i, i / 2, this.a);
            i = i / 2;
        }
    };

    pop = data => {};
}

module.exports = Heap;
