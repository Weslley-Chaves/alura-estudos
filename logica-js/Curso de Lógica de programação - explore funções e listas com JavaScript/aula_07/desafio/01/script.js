arrumarTexto('h1', 'Calcule o seu índice de massa corporal (IMC)');

// Função para calcular o IMC
function calculo(peso, altura) {
    return peso / (altura * altura);
}
// Classificação IMC
function classificaIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    else if (imc < 25) return "Peso normal";
    else if (imc < 30) return "Sobrepeso";
    else if (imc < 35) return "Obesidade grau 1";
    else if (imc < 40) return "Obesidade grau 2";
    else return "Obesidade grau 3";
}
// Função Principal
function armazenarInput() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById('resultado').textContent =
            'Preencha os dois campos corretamente para calcular o IMC. 🚫';
        return;
    }

    let imc = calculo(peso, altura);
    document.getElementById('resultado').textContent =
        `Seu IMC é: ${imc.toFixed(2)} (${classificaIMC(imc)})`;
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}
// Função para arrumar os textos presentes no arquivo HTML
function arrumarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

