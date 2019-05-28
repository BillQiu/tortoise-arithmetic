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

    insert = data => {
        ++this.count;
        // 插入
        this.a[this.count] = data;

        // 自下向上堆化
        let i = this.count;
        while (i / 2 > 0 && this.a[i] > this.a[i / 2]) {
            this.swap(i, i / 2, this.a);
            i = i / 2;
        }
    };

    pop = data => {
        if (this.count === 0) {
            return null;
        }

        const result = this.a[1];

        this.a[1] = this.a[this.count];
        this.a.pop();
        --this.count;

        const heapify = (a, n, i) => {
            while (true) {
                let maxPos = i;
                if (i * 2 <= n && a[i] < a[i * 2]) maxPos = i * 2;
                if (i * 2 + 1 <= n && a[i] < a[i * 2 + 1]) maxPos = i * 2 + 1;
                if (maxPos === i) {
                    break;
                }
                this.swap(i, maxPos, this.a);
                i = maxPos;
            }
        };

        heapify(this.a, this.count, 1);

        // 自上向下堆化

        return result;
    };

    //

    /**
     * 1. 堆化：从第一个非叶子节点开始，向下堆化。
     * 2. 排序：类似“删除堆顶元素”的操作。将堆顶元素移除后，把下标为 n 的元素放到堆顶，
     * 然后重新构建堆。
     *
     * @memberof Heap
     */
    nlargest = (arr, num) => {
        if (arr.length === 0) return;

        arr.unshift(null);

        const firstNum = Math.floor(arr.length / 2);
        const count = arr.length - 1;
        let firstPos = firstNum;

        const heapify = (a, n, i) => {
            while (true) {
                let maxPos = i;

                if (i * 2 <= n && a[i] < a[i * 2]) maxPos = i * 2;
                if (i * 2 + 1 <= n && a[i] < a[i * 2 + 1]) maxPos = i * 2 + 1;
                if (maxPos === i) {
                    break;
                }
                this.swap(i, maxPos, a);
                i = maxPos;
            }
        };

        while (true) {
            heapify(arr, count, firstPos);
            --firstPos;
            if (firstPos === 0) break;
        }

        return arr.slice(1, num + 1);
    };
}

module.exports = Heap;
