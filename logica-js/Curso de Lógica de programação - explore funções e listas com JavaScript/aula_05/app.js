
let title = document.querySelector('h1')
title.innerHTML = 'Jogo do Número Secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = `Escolha um número entre 1 e 10:`;

function verificarChute() {
    console.log('O botão foi clicado.')
}

/*
alert('Boas vindas ao jogo do Número Secreto!');
let maxNumber = 500;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let kickNumber;
let flag = 1;

while (kickNumber != secretNumber) {
    // secretNumber =
    kickNumber = prompt(`Escolha um número entre 1 e ${maxNumber}: `);

    if (kickNumber == secretNumber) {
        alert(`Você descobriu o Número Secreto (${secretNumber}).\nVocê precisou de ${flag > 1 ? flag : 'apenas uma'} tentativa${flag > 1 ? 's' : ''} para descobrir o Número Secreto.`); // Concatenação - Template Strings (`${variável}`)
    }
    else {
        if (kickNumber < secretNumber) {
            alert(`Você digitou o número errado.\nO Número Secreto é MAIOR do que o número digitado (${kickNumber}).`);
        }
        else {
            alert(`Você digitou o número errado.\nO Número Secreto é MENOR do que o número digitado (${kickNumber}).`);
        }
    }
    flag++; // Atribui 1 ao valor da variável.
}
*/
