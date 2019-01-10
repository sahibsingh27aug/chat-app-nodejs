const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it("Should reject non-string values", () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it("Should reject string with only spaces", () => {
        var res = isRealString('     ');
        expect(res).toBe(false);
    });

    it("Should allow string with non-space character", () => {
        var res = isRealString('   Andrew   ');
        expect(res).toBe(true);
    });
});