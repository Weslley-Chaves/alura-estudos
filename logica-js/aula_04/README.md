# Aula 04 - Evitando Repetição e Gerando Números Aleatórios

## ✅ Conteúdos abordados

* [X] Operadores ternários e boas práticas para evitar código duplicado
* [X] Consulta à documentação oficial (ex: `Math.random()`)
* [X] Uso da função `Math.random()` para gerar números aleatórios
* [X] Aplicação de lógica condicional com `if/else` em situações variadas

## 💡 Descrição da aula

Nesta aula, aprendemos a refatorar o código para  **evitar repetições** , como no caso do uso da palavra “tentativa” no singular ou plural, utilizando operadores ternários. Exploramos a **documentação oficial** para entender como funciona a função `Math.random()` e a aplicamos para tornar o jogo do número secreto  **mais dinâmico e imprevisível** , com um número aleatório entre 1 e 500.

Também realizamos exercícios práticos envolvendo entrada de dados com `prompt()`, verificações com `if/else`, contadores com `while`, e operações matemáticas.

## 💻 Trecho de código aplicado

```javascript
alert('Boas vindas ao jogo do Número Secreto!');
let maxNumber = 500;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let kickNumber;
let flag = 1;

while (kickNumber != secretNumber) {
    kickNumber = prompt(`Escolha um número entre 1 e ${maxNumber}: `);

    if (kickNumber == secretNumber) {
        alert(`Você descobriu o Número Secreto (${secretNumber}).\nVocê precisou de ${flag > 1 ? flag : 'apenas uma'} tentativa${flag > 1 ? 's' : ''} para descobrir o Número Secreto.`);
    } else {
        if (kickNumber < secretNumber) {
            alert(`Você digitou o número errado.\nO Número Secreto é MAIOR do que o número digitado (${kickNumber}).`);
        } else {
            alert(`Você digitou o número errado.\nO Número Secreto é MENOR do que o número digitado (${kickNumber}).`);
        }
    }
    flag++;
}
```

## 🧩 Desafios realizados

1. Exibir mensagem de boas-vindas no console
2. Usar `prompt()` para capturar nome, idade e linguagem de programação
3. Verificar se a idade indica maioridade
4. Identificar se um número é positivo, negativo ou zero
5. Fazer contagem de 1 a 10 com `while`
6. Gerar nota aleatória com `Math.random()` e exibir “Aprovado” ou “Reprovado”
7. Gerar e exibir números aleatórios entre 0 e 1000
