const sum = require('./sum');

describe('sum', () =>  {
    it('Add 1 and 3 to equal 4', () => {
        expect(sum(1,3)).toEqual(4);
    })
    it('Add 90 and 3 to equal 93', () => {
        expect(sum(90,3)).toEqual(93);
    })
    it('Add 10 and 6 to equal 16', () => {
        expect(sum(10,6)).toEqual(16);
    })
    it('Add 1 and 1 to equal 2', () => {
        expect(sum(1,1)).toEqual(2);
    })
})