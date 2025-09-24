// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolar() {
   let dolar = parseFloat(document.getElementById("number").value);
   let real = 4.80;

   if (isNaN(dolar)) {
      document.getElementById("resultado").textContent = "Digite um valor válido em dólar.";
      return;
   }

   let resultado = dolar * real;
   document.getElementById("resultado").textContent =
      `US$ ${dolar.toFixed(2)} equivale a R$ ${resultado.toFixed(2)} (cotação R$ ${real.toFixed(2)}).`;
}
