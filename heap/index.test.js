const Heap = require("./index");
const expect = require("chai").expect;

describe("heap", () => {
    it("insert", () => {
        const heap = new Heap();
        heap.insert(2);
        heap.insert(3);
        heap.insert(1);
        expect(heap.heap).to.deep.equal([3, 2, 1]);
    });

    it("pop", () => {
        const heap = new Heap();
        heap.insert(2);
        heap.insert(3);
        heap.insert(1);
        const max = heap.pop();
        expect(max).to.equal(3);
        expect(heap.heap).to.deep.equal([2, 1]);
    });

    it("nlargest", () => {
        const heap = new Heap();
        const arr = [3, 4, 652, 5, 3];
        expect(heap.nlargest(arr, 2)).to.deep.equal([652, 5]);
    });
});
