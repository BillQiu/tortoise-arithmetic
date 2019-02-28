const SelectionSort_0 = require('./index_0');
const SelectionSort_1 = require('./index_1');
const expect = require('chai').expect;


describe('SelectionSortTest', function() {
    it('V0', function() {
        expect(SelectionSort_0([4,1,5,9,7])).to.deep.equal([1,4,5,7,9]);
    });
    it('V1', function() {
        expect(SelectionSort_1([4,1,5,9,7])).to.deep.equal([1,4,5,7,9]);
    });
});