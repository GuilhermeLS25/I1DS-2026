//41. Conte quantos números são pares e ímpares.

var num = [12, 2, 31, 4, 259, 26, 7, 18, 9];
let contador1 = 0;
let contador2 = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        contador1 += 1;
    } else {
        contador2 += 1;
    }
}

console.log("-> Quantidade de Números PARES:", contador1);
console.log("-> Quantidade de Números IMPARES:", contador2);