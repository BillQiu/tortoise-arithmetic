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
});
