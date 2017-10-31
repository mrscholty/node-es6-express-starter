let chai = require('chai');
let expect = chai.expect;
let Languages = require('../../src/business/Languages');

describe('Business: Languages', () => {

    let data = [
        {"id": "1", "name": "JavaScript"},
        {"id": "2", "name": "Java"},
        {"id": "3", "name": "C#"},
    ];

    Languages.setData(data);

    it('should get', () => {
        expect(Languages.get()).to.deep.equal([
            {"id": "1", "name": "JavaScript"},
            {"id": "2", "name": "Java"},
            {"id": "3", "name": "C#"},
        ]);
    });

    it('should getOne', () => {
        expect(Languages.getOne('1')).to.deep.equal(
            {"id": "1", "name": "JavaScript"}
        );
    });

    it('should add', () => {
        expect(Languages.add({"id": "4", "name": "Pascal"})).to.deep.equal(
            [
                {"id": "1", "name": "JavaScript"},
                {"id": "2", "name": "Java"},
                {"id": "3", "name": "C#"},
                {"id": "4", "name": "Pascal"}
            ]
        );
    });

    it('should update', () => {
        expect(Languages.update('4', {"id": "4", "name": "Turbo Pascal"})).to.deep.equal(
            {"id": "4", "name": "Turbo Pascal"}
        );
    });

    it('should remove', () => {
        expect(Languages.remove('4')).to.deep.equal(
            {"id": "4", "name": "Turbo Pascal"}
        );
    });

});