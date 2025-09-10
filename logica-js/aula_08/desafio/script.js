// 1. Crie uma lista vazia, com o nome listaGenerica.

console.log('\n1. Crie uma lista vazia, com o nome listaGenerica.\n')
let listaGenerica = [];
console.log(listaGenerica);

// 2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

console.log('\n2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: JavaScript, C, C++, Kotlin e Python.\n')
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

// 3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

console.log('\n3. Adicione à lista linguagensDeProgramacao os seguintes elementos: Java, Ruby e GoLang.\n')
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

// 4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

console.log('\n4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.\n')
let listaDeNomes = ['Weslley', 'Analice', 'Maria'];

console.log(listaDeNomes);
console.log(listaDeNomes[0]);


// 5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

console.log('\n5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.\n')
listaDeNomes = ['Weslley', 'Analice', 'Maria'];
console.log(listaDeNomes);
console.log(listaDeNomes[1]);

// 6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

console.log('\n6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.\n')
listaDeNomes = ['Weslley', 'Analice', 'Maria'];
console.log(listaDeNomes);
console.log(listaDeNomes[listaDeNomes.length - 1]);
