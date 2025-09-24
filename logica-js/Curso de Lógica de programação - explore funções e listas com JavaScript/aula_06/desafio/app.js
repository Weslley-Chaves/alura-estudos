// 1. Criar uma função que exibe "Olá, mundo!" no console.

function exibirConsole() {
    console.log('Olá, mundo!');
}

exibirConsole();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.


function saudacao(nome) {
    console.log(`Olá, ${nome}`);
}

saudacao('Weslley Santos Chaves');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function multiplicarPorDois(number) {
    return number * 2;
}
console.log(multiplicarPorDois(10));

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(a, b, c) {
    return (a + b + c) / 3;
}
console.log(media(3, 6, 9));

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(a, b) {
    return a === b ? 'Os números são iguais.' : (a > b ? a : b);
}

console.log(maior(2, 2));

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function exp(x) {
    return x ** 2;
}
console.log(exp(9))
