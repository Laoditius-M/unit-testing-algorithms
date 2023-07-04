const reversestring = require('./reversestring');

describe('ReverseString', () => {
    it('should be a function', () => {
        expect(typeof reversestring).toEqual('function');
    })

    it('should return a string', () => {
        expect(typeof reversestring('helloWorld')).toEqual('string');
    })

    it('should return the reversed word', () => {
        expect(reversestring('helloWorld')).toEqual('dlroWolleh');
        expect(reversestring('hi')).toEqual('ih');
        expect(reversestring('laurd')).toEqual('drual');
    })
})