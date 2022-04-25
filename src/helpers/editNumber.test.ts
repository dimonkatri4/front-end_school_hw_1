import editNumber from './editNumber';

describe('editNumber helper function', () => {
    it('when the input parameter is equal to 999000', () => {
        const result = editNumber(999000);
        expect(result === '999K');
    });
    it('when the input parameter is equal to 14500008', () => {
        const result = editNumber(14500008);
        expect(result === '14.5M');
    });
    it('when the input parameter is equal to 756', () => {
        const result = editNumber(756);
        expect(result === '756');
    });
});
