alert('Boas vindas ao jogo do Número Secreto!');
let secretNumber = 5;
console.log(secretNumber)
let kickNumber = prompt('Escolha um número entre 1 e 10.');


if (kickNumber == secretNumber) {
    alert(`Você descobriu o Número Secreto (${secretNumber}).`); // Concatenação - Template Strings (`${variável}`)
}
else {
    if (kickNumber < secretNumber) {
        alert(`Você digitou o número errado. O Número Secreto é MENOR do que o número digitado (${kickNumber}).`);
    }
    else {
        alert(`Você digitou o número errado. O Número Secreto é MAIOR do que o número digitado (${kickNumber}).`);
    }
}
