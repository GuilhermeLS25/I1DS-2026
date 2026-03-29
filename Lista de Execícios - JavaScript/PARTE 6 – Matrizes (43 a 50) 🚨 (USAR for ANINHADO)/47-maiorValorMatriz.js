//47. Encontre o maior valor da matriz.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let maior = matriz[0][0];

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (matriz[l][c] > maior) {
            maior = matriz[l][c]
        }
    }
}

console.log("O maior valor é o número:", maior);