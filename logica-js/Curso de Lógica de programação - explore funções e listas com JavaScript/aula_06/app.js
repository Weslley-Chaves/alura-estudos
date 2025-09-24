// Número máximo para gerar o número aleatório
const numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();

// Função para modificar texto na tela
function modificarTextoId(id, texto) {
    document.getElementById(id).textContent = texto;
}
// Função para exibir texto na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// Exibição inicial
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}:`);

// Geração do número secreto (chamada imediata)
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * numeroMaximo + 1);
}
// Função principal
function verificarChute() {
    console.log(numeroSecreto)
    let chute = document.querySelector('input').value;
    console.log(chute);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', `Parabéns! Você acertou o número Secreto.`)
        exibirTextoNaTela('p', `O Número Secreto era ${numeroSecreto}.`)
    }

}


