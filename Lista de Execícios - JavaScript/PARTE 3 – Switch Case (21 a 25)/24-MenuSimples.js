/*************************
24. Crie um menu simples:
       1: Somar
       2: Subtrair
       3: Multiplicar
       4: Dividir
**************************/

let menu = "Multiplicar"
let num1 = 5
let num2 = 2

switch (menu) {
    case "Soma":
        let soma = 5 + 2
        console.log("--------------------------------------------------");
        console.log("A soma entre", num1, "e", num2,"é igual a:", soma);
        console.log("--------------------------------------------------");
        break;

    case "Subtrair":
        let subtrair = 5 - 2
        console.log("--------------------------------------------------");
        console.log("A Subtração entre", num1, "e", num2,"é igual a:", subtrair);
        console.log("--------------------------------------------------");
        break;

    case "Multiplicar":
        let multiplicar = 5 * 2
        console.log("--------------------------------------------------");
        console.log("A Multiplicação entre", num1, "e", num2,"é igual a:", multiplicar);
        console.log("--------------------------------------------------");
        break;

    case "Dividir":
        let dividir = 5 / 2
        console.log("--------------------------------------------------");
        console.log("A divisão entre", num1, "e", num2,"é igual a:", dividir);
        console.log("--------------------------------------------------");
        break;

    default:
        console.log("---------------------");
        console.log("Opção NÃO Existente!!");
        console.log("---------------------");
        break;
}
