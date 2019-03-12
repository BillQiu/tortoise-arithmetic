const QuickSort = require('./index');
const expect = require('chai').expect;


describe('QuickSortTest', function() {
    it('V0', function() {
        expect(QuickSort([4, 1, 5, 9, 7])).to.deep.equal([1, 4, 5, 7, 9]);
    });
    // it('V1', function() {
    //     expect(SelectionSort_1([4, 1, 5, 9, 7])).to.deep.equal([1, 4, 5, 7, 9]);
    // });
});