const sum = require('./sum.js');

describe('Requisito 1', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(9).toEqual(sum(4,5));
    });
    
    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(0).toEqual(sum(0,0));
    });

    it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
        expect(() => sum(4,'5')).toThrow('parameters must be numbers');
    })
});