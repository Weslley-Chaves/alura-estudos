# Aula 03 - Condicionais e Laços de Repetição

## ✅ Conteúdos abordados

* [X] Estruturas condicionais com `if/else`
* [X] Laços de repetição com `while`
* [X] Contadores e controle de fluxo
* [X] Interação com o usuário usando `prompt()` e `alert()`

## 💡 Descrição da aula

Nesta aula, aprofundamos o uso de **estruturas condicionais** (`if/else`) para verificar se um número é maior ou menor que outro, aplicando a lógica em um jogo de adivinhação. Aprendemos a usar o **loop `while`** para repetir blocos de código enquanto uma condição for verdadeira. Também implementamos um **contador de tentativas** para mostrar quantas vezes o usuário tentou adivinhar o número secreto.

Além disso, realizamos  **desafios práticos com contagem progressiva e regressiva** , reforçando o uso de loops e variáveis.

## 💻 Trecho de código aplicado

```javascript
alert('Boas vindas ao jogo do Número Secreto!');
let secretNumber = 5;
console.log(secretNumber)
let kickNumber;
let flag = 1;

while (kickNumber != secretNumber) {
    kickNumber = prompt('Escolha um número entre 1 e 10.');

    if (kickNumber == secretNumber) {
        alert(`Você descobriu o Número Secreto (${secretNumber}). Você precisou de ${flag} tentativa${flag > 1 ? 's' : ''} para descobrir o Número Secreto.`);
    } else {
        if (kickNumber < secretNumber) {
            alert(`Você digitou o número errado. O Número Secreto é MAIOR do que o número digitado (${kickNumber}).`);
        } else {
            alert(`Você digitou o número errado. O Número Secreto é MENOR do que o número digitado (${kickNumber}).`);
        }
    }
    flag++;
}
```

## 🧩 Desafios realizados

**1.** Contador de 1 a 10 com `while`
**2.** Contador de 10 a 0 com `while`
**3.** Contagem regressiva a partir de um número digitado pelo usuário
**4.** Contagem progressiva até um número digitado pelo usuário
