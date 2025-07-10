
alert('Boas vindas ao jogo do Número Secreto!');
let secretNumber = 10;

let kickNumber = prompt('Escolha um número entre 1 e 10.');


if (kickNumber == secretNumber) {
    console.log('Você descobriu o Número Secreto.');
}
else {
    alert('Você digitou o número errado.');
}


// Use '//' para comentar uma única linha em JS
// Use '/*' e */ para comentar grandes intervalos de código em JS

// Atividades da aula prática - desenvolvendo a lógica de programação

// 1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

// alert('Boas vindas ao nosso site!');

// 2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
/*
let nome = 'Lua';
console.log(nome);
*/

// 3. Crie uma variável chamada idade e atribua a ela o valor 25.
/*
let idade = 25;
console.log(idade);
*/

// 4. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

/*
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
*/

/*
let nome = prompt('Qual é o seu nome?');
let idade = Number(prompt(`${nome}, qual é a sua idade?`));
let pendente = 18 - idade;

if (idade >= 18) {
    alert(`${nome}, você já pode tirar sua habilitação.`);
} else {
    alert(`Você ainda não pode tirar a sua habilitação. Falta${pendente > 1 ? 'm' : ''} ${pendente} ano${pendente > 1 ? 's' : ''}.`); // Utilização de ternário nessa linha de código.
}
// ternário devem ser utilizados da seguinte forma:

// condição ? valor_se_verdadeiro : valor_se_falso;

*/

/*
// Exercício de fixação para utilização de ternários em JS.

let nota = 7;
let resultado = nota > 6 ? 'Aprovado' : 'Reprovado';

alert(resultado);
*/

