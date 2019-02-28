const InsertSort = require('./index');
const expect = require('chai').expect;


describe('InsertSortTest', function() {
    it('run', function() {
        expect(InsertSort([4, 1, 5, 9, 7])).to.deep.equal([1, 4, 5, 7, 9]);
    });
});