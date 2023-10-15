import input from "readline-sync";

console.log("Aplicação de juros: ");

let valor = input.question("Informe o valor devido: R$");

if (valor > 0) {
  let dias = input.question(
    "informe quantos dias se passaram desde o vencimento do boleto: "
  );
  if (dias > 0) {
    if (dias > 15) {
      var juros = (10 / 100) * valor;
    } else {
      var juros = (5 / 100) * valor;
    }
    valor = Number(valor);
    let valord = valor + juros;

    console.log("Valor original da dívida: R$" + valor);
    console.log("Dias atrasados: " + dias);
    console.log("taxa de juros: " + juros);
    console.log("Valor total com juros: R$" + valord);
  } else {
    console.log("Você está em dia!");
  }
} else {
  console.log("O valor da dívida deve ser maior que zero!");
}
