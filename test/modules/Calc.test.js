let chai = require('chai');
let expect = chai.expect;
let Calc = require('../../src/modules/Calc');

describe('Calc', () => {
    it('should add two numbers', () => {
        expect(Calc.add(6,2)).to.equal(8);
    });

    it('should subtract one number from another', () => {
        expect(Calc.sub(6,2)).to.equal(4);
    });

    it('should multiply two numbers', () => {
        expect(Calc.mul(6,2)).to.equal(12);
    });

    it('should divide one number from another', () => {
        expect(Calc.div(6,2)).to.equal(3);
    });

});

