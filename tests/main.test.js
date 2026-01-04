// Gerado com o prompt: "Crie testes unitários para a função calcularTotal usando Jest"
const { calcularTotal } = require('../src/main');

test('Calcula total com desconto', () => {
    const pedidos = [{valor:100}, {valor:50}];
    expect(calcularTotal(pedidos, 0.1)).toBe(135);
});

test('Calcula total sem desconto', () => {
    const pedidos = [{valor:200}, {valor:50}];
    expect(calcularTotal(pedidos, 0)).toBe(250);
});

