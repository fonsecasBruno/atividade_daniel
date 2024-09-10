const { default: expect } = require("expect");

class Calculadora {
    resultado;

    constructor () {
        this.resultado = 0;
    }

}

describe("calculado", () => {
    test("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
    expect(calculadora).toBeDefined();
    expect(calculadora.resultado).toBeDefined();
    expect(typeof calculadora.resultado).toBe("number");
    expect(calculadora.resultado).toBe(0);


    });

    it('Atribui um novo valor à calculadora', () => {
        const calculadora = new Calculadora();
        calculadora.resultado='Texto';
        expect(() => {calculadora.resultado = 'Text'}).toThrow(TypeError);
        expect(() => {calculadora.resultado = 'Text'}).toThrow("O argumento deve ser um numero válido");

    })

    it('Operação soma', () => {
        const calculadora = new Calculadora();
        expect(calculadora.soma).toBeDefined();
        expect(calculadora.soma.length).toBe(1);
    })

});