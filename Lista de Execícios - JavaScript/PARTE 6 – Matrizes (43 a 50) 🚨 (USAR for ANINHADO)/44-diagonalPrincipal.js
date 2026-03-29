//44. Exiba a diagonal principal de uma matriz.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (l == c) {
            console.log(matriz[l][c]);
        }
    }
}
