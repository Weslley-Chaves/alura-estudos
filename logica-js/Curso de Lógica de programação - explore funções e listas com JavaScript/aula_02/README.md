
# Aula 2 - Estruturas Condicionais e Template Strings

## ✅ Conteúdos abordados

- [X] Uso do console para testes e depuração
- [X] Estruturas condicionais com `if/else`
- [X] Comparações com operadores lógicos
- [X] Template strings com `${}` para mensagens personalizadas

## 💡 Descrição da aula

Nesta aula:

- Utilizamos o console para testar e depurar nosso código, exibindo mensagens e valores durante a execução do programa;
- Aprendemos a utilizar estruturas condicionais (`if/else`) para criar lógicas que permitem ao programa tomar decisões com base em condições específicas;
- Implementamos um bloco de código para exibir uma mensagem caso o chute do usuário não seja igual ao número secreto;
- Usamos template strings para concatenar o número secreto com o valor armazenado em uma variável e exibir uma mensagem personalizada.

## 💻 Trecho de código aplicado

```javascript
let numeroSecreto = 7;
let chute = prompt('Digite um número:');

if (chute == numeroSecreto) {
  alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
} else {
  alert(`Que pena! O número secreto era ${numeroSecreto}. Tente novamente.`);
}
```
