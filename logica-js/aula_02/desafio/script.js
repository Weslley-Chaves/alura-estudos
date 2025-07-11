// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/*
let dia = prompt('Qual é o dia da semana?');
let semana = ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA'];

let diaMaiusculo = dia.toUpperCase();

if (diaMaiusculo === 'SÁBADO' || diaMaiusculo === 'DOMINGO') {
    alert('Bom fim de semana!');
} else if (semana.includes(diaMaiusculo)) {
    alert('Boa semana!');
} else {
    alert('Você não digitou um dia válido.');
}
*/

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

/*
let number = parseInt(prompt('Digite um número: '));

if (number > 0) {
    alert('O número digitado é positivo.');
} else if (number < 0) {
    alert('O número digitado é negativo.');
} else {
    alert('O número digitado é zero.');
}
*/

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

/*
let input = prompt('Digite sua pontuação:');
let pontuacao = parseInt(input);

if (isNaN(pontuacao)) {
    alert('Por favor, digite um número válido.');
} else if (pontuacao >= 100) {
    alert('🎉 Parabéns, você venceu!');
} else {
    alert('😕 Tente novamente para ganhar.');
}
*/

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

/*
let saldo = parseFloat(prompt('Digite o valor do seu saldo:'));

if (!isNaN(saldo)) {
    if (saldo < 0) {
        alert(`O seu saldo é R$ ${saldo.toFixed(2)} e está negativo.`);
    } else {
        alert(`O seu saldo é R$ ${saldo.toFixed(2)}.`);
    }
} else {
    alert('Saldo inválido.');
}
*/

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
/*
let nome = prompt('Digite o seu nome:');

if (nome && isNaN(nome)) {
    alert(`Querido(a) ${nome}, seja bem-vindo(a) ao nosso sistema.`);
} else {
    alert('O campo nome não pode ficar vazio ou conter apenas números.');
}
*/


