# Aula 05 - Manipulando o HTML com JavaScript

## ✅ Conteúdos abordados

* [X] Integração entre HTML, CSS e JavaScript
* [X] Manipulação do DOM com `document.querySelector`
* [X] Alteração dinâmica de textos no HTML com `.innerHTML`
* [X] Criação e execução de funções em JavaScript
* [X] Interação com o usuário via `prompt()`, `alert()` e `console.log()`

## 💡 Descrição da aula

Nesta aula, iniciamos a prática com um  **projeto web completo** , integrando HTML, CSS e JavaScript. Aprendemos a manipular o conteúdo dos elementos HTML diretamente pelo JavaScript, como o `<h1>` e os parágrafos. Exploramos a  **importância da interação entre o código e a interface do usuário** , tornando a página mais dinâmica e interativa.

Criamos várias **funções para responder a eventos de clique** em botões, como exibir mensagens no console, emitir alertas, capturar entradas com `prompt()` e realizar operações matemáticas simples.

A aula também preparou o terreno para o próximo tema:  **funções e sua importância no desenvolvimento de software** .

## 💻 Trecho de código aplicado

```javascript
// Altera o título da página
let title = document.querySelector('h1');
title.innerHTML = 'Hora do Desafio';

// Exibe mensagem no console ao clicar no botão
function verificarChute() {
    console.log('O botão foi clicado');
}

// Exibe um alerta com uma mensagem
function mensagem() {
    alert('Eu amo JS');
}

// Usa prompt e exibe cidade em alerta
function askCity() {
    let ask = prompt('Fala o nome de uma cidade do Brasil.');
    alert(`Estive em ${ask} e lembrei de você.`);
}

// Soma dois números inseridos pelo usuário
function somarNumeros() {
    let numberOne = parseInt(prompt('Digite um número:'));
    let numberTwo = parseInt(prompt('Digite outro número:'));

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        alert('Você não digitou um número válido. [TENTE NOVAMENTE]');
    } else {
        alert(`A soma de ${numberOne} e ${numberTwo} é ${numberOne + numberTwo}.`);
    }
}
```
