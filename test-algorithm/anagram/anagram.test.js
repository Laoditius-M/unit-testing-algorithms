const anagram = require('./anagram');

describe('Anagram', () => {
    it('should be a function', () => {
        expect(typeof anagram).toEqual('function');
    })

    it('should return true if it is an anagram', () => {
        expect(anagram('ram', 'arm')).toBeTruthy();
    })
})