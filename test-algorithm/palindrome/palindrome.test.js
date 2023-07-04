const palindrome = require('./palindrome');

describe('Palindrome', () => {
    it('should be a function', () => {
        expect(typeof palindrome).toEqual('function');
    })
    it('should return a boolean', () => {
        expect(typeof palindrome('racecar')).toEqual('boolean');
    })
    it('should return true if a palindrome', () => {
        expect(palindrome('racecar')).toBeTruthy();
        expect(palindrome('wow')).toBeTruthy();
        expect(palindrome('livil')).toBeTruthy();
    })

    it('should return false if not a palindrome', () => {
        expect(palindrome('racecars')).toBeFalsy();
    })
})