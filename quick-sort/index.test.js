const { quickSort_v0, quickSort_v1} = require('./index');
const expect = require('chai').expect;

const source = [4, 1, 5, 9, 7]
const target = [1, 4, 5, 7, 9]

describe('QuickSortTest', function() {
    it('v0', function() {
        expect(quickSort_v0(source)).to.deep.equal(target);
    });
    it('v1', function() {
        quickSort_v1(source, 0, source.length - 1);

        expect(source).to.deep.equal(target);
    });
});

