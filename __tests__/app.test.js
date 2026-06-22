// Funções simulando a integração com o Gemini que o professor pediu
function enviarPrompt(prompt) {
    if (!prompt || prompt.trim() === "") {
        throw new Error("O prompt não pode ser vazio");
    }
    return "Pronto para enviar";
}

function receberResposta(pergunta) {
    if (pergunta === "qual é a capital do Brasil") {
        return "A capital do Brasil é Brasília";
    }
    return "Resposta da IA";
}

// 1. Teste de envio: Verifica se levanta erro com prompt vazio
test('Deve levantar uma exceção se o prompt for vazio', () => {
    expect(() => enviarPrompt("")).toThrow("O prompt não pode ser vazio");
});

// 2. Teste de recebimento: Verifica se a resposta contém a palavra esperada
test('Deve verificar se a resposta contém a palavra Brasília', () => {
    const resposta = receberResposta("qual é a capital do Brasil");
    expect(resposta).toContain("Brasília");
});