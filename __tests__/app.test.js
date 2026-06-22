// Teste simples para a atividade integradora
function somar(a, b) {
    return a + b;
}

test('Verifica se a soma de 2 + 3 é igual a 5', () => {
    expect(somar(2, 3)).toBe(5);
});

test('Verifica se a soma de 10 + 10 é igual a 20', () => {
    expect(somar(10, 10)).toBe(20);
});