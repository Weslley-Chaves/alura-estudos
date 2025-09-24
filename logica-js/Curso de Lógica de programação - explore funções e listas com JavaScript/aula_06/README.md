# Aula 06 - Funções com Parâmetros e Retornos

## ✅ Conteúdos abordados

* [X] Criação de funções com e sem retorno
* [X] Uso da palavra-chave `return`
* [X] Definição e uso de parâmetros em funções
* [X] Diferença entre funções que apenas executam ações e funções que retornam valores
* [X] Comunicação entre funções e o restante do programa

## 💡 Descrição da aula

Nesta aula, aprendemos a **criar funções em JavaScript** tanto com quanto sem retorno de valor. Entendemos a importância de  **usar parâmetros para tornar as funções reutilizáveis** , além de aplicar a palavra-chave `return` para devolver resultados ao código que chamou a função.

Foi demonstrado como utilizar o `Math.random()` dentro de uma função que retorna um  **número aleatório** , e como criar uma função chamada `exibirTextoNaTela` com dois parâmetros para  **mostrar mensagens na interface do jogo** .

Também discutimos a **importância dos parâmetros e retornos** como forma de comunicação entre partes do código.

```javascript
// Função que retorna número aleatório
function gerarNumeroAleatorio(max) {
    return parseInt(Math.random() * max + 1);
}

// Função que exibe texto na tela (com dois parâmetros)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Uso das funções
let numero = gerarNumeroAleatorio(10);
console.log(`Número gerado: ${numero}`);
exibirTextoNaTela('h1', 'Bem-vindo ao Jogo!');
// Insira aqui um exemplo de código marcante
```

## 🧩 Desafios realizados

* Criar uma função que exibe "Olá, mundo!" no console:
```javascript
function exibirConsole() {
    console.log('Olá, mundo!');
}
```

* Criar uma função que recebe um nome e exibe uma saudação:

```javascript
function saudacao(nome) {
    console.log(`Olá, ${nome}`);
}
```

* Retornar o dobro de um número:

```javascript
function multiplicarPorDois(number) {
    return number * 2;
}
```

* Retornar a média de três números:

```javascript
function media(a, b, c) {
    return (a + b + c) / 3;
}
```

* Retornar o maior entre dois números:

```javascript
function maior(a, b) {
    return a === b ? 'Os números são iguais.' : (a > b ? a : b);
}
```

* Retornar o quadrado de um número:

```javascript
function exp(x) {
    return x ** 2;
}
```
