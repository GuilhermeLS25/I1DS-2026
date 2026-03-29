//48. Multiplique todos os valores por um número X.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let x = 2;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        matriz[l][c] *= x;

    }
}

console.table(matriz);
