const { cyclicBinarySearch } = require("./index");
const expect = require("chai").expect;

const source = [8, 11, 19, 23, 27, 33, 45, 55, 67, 98];
const target = 19;

describe("BinarySearchTest", function() {
    it("cyclic", function() {
        expect(cyclicBinarySearch(source, target)).to.equal(
            source.indexOf(target)
        );
    });
});
