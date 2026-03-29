//46. Some todos os elementos da matriz.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let soma = 0;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        soma += matriz[l][c];

    }
}

console.log(soma);
