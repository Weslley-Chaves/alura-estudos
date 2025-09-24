// 1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
// 2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

tittle = document.querySelector('h1');
tittle.innerHTML = 'Hora do Desafio';

// 3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarChute() {
    console.log('O botão foi clicado');
}

// 4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function mensagem() {
    alert('Eu amo JS');
}

// 5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function askCity() {
    let ask = prompt('Fala o nome de uma cidade do Brasil.');
    alert(`Estive em ${ask} e lembrei de você.`);
}

// 6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function somarNumeros() {
    let numberOne = parseInt(prompt('Digite um número:'));
    let numberTwo = parseInt(prompt('Digite outro número:'));

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        alert('Você não digitou um número válido. [TENTE NOVAMENTE]');
    } else {
        alert(`A soma de ${numberOne} e ${numberTwo} é ${numberOne + numberTwo}.`);
    }
}
