// 1.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
/*
console.log('Seja bem vindo.');
*/

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
/*
let nome = 'Weslley'
console.log(`Olá, ${nome}!`);
*/

// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
/*
let nome = 'Weslley'
alert(`Olá, ${nome}!`);
*/

// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
/*
let linguagemProgramacao = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemProgramacao);
*/

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
/*
let valor1 = 10;
let valor2 = 50;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
*/

// 6. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

/*
let input = prompt('Digite sua idade:');
let age = parseInt(input);

if (isNaN(age)) {
    alert('Por favor, digite um número válido.');
} else {
    let message = age >= 18
        ? `Você tem ${age} anos, portanto, é maior de idade.`
        : `Você tem ${age} anos, portanto, é menor de idade.`;
    alert(message);
}
*/

// 7. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

/*
let numero = parseInt(prompt('Digite um número para que o programa verifique se ele é positivo ou negativo.'));
if (isNaN(numero)) {
    alert('Você não digitou um número válido.');
} else {
    if (numero > 0) {
        alert('O número digitado é positivo.');
    } else if (numero < 0) {
        alert('O número digitado é negativo.');
    } else {
        alert('O número digitado é zero.');
    }
}
*/

// 8. Use um loop while para imprimir os números de 1 a 10 no console.
/*
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}
*/

// 9. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
/*
let nota = Math.floor(Math.random() * 11);
console.log(nota);

if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado')
}
*/

// 10. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
/*
let numeroAleatorio = Math.floor(Math.random() * 1_000);
console.log(numeroAleatorio)
*/
