// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial() {
   x = parseInt(document.getElementById("number").value);
   let resultado = 1;
   let contador = x;
   while (contador > 1) {
      resultado = contador * resultado;
      contador--;
   }
   // console.log(resultado)
   document.getElementById("resultado").textContent = `O fatorial de ${x} é ${resultado}.`;
}
