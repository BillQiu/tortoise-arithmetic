// https://juejin.im/post/5b8a58da51882542b03e6e23
// https://github.com/wangzheng0822/algo/blob/master/java/24_tree/BinarySearchTree.java

/**
 * TODO: 查找、插入、删除，是否重复数据
 * TODO: 查找最大节点和最小节点、前驱节点和后继节点
 * TODO: 前中后续遍历
 *
 * @param {*} params
 */
class BST {
    constructor() {
        this.root = null;
    }

    // 循环实现
    insert = data => {
        const n = new Node(data);

        if (this.root === null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    };

    // TODO: 重复数据
    find = data => {
        let current = this.root;
        while (current !== null) {
            if (current.data === data) {
                return current;
            } else if (data > current.data) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        return null;
    };

    delete = data => {
        let current = this.root;
    };
}

function Node(data, left = null, right = null) {
    this.data = data; // 节点值
    this.left = left; // 当前节点的左子节点
    this.right = right; // 当前节点的右子节点
    this.show = () => {
        return this.data;
    };
}
